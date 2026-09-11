import { addSeconds, fromUnixTime } from 'date-fns';

import type { ForecastClean } from '@/feats/main-template.ts';
import type { LitMain } from '@/main.ts';
import { requestCurrForecast, requestCurrLocation, searchForecast, searchLocation } from '%/api.ts';
import type { SchemaProps } from '%/schemas.ts';

const FORECAST_INTERVAL = 8;
const METERS_PER_KILOMETER = 1000;
const SECONDS_PER_MINUTE = 60;
const REGION_NAMES_IN_ENGLISH = new Intl.DisplayNames(['en'], { type: 'region' });

type CurrentWeather = SchemaProps['currentWeatherAPI'];
type ForecastWeather = SchemaProps['forecastWeatherList'];
type WeatherRequests = readonly [
  Promise<CurrentWeather | undefined>,
  Promise<ForecastWeather | undefined>,
];

const resetWeather = (main: LitMain): void => {
  Object.assign(main, {
    city: undefined,
    clouds: undefined,
    country: undefined,
    currTime: undefined,
    forecastData: [],
    mainFeel: undefined,
    mainHumidity: undefined,
    mainTemp: undefined,
    sunrise: undefined,
    sunset: undefined,
    visibility: undefined,
    weatherDesc: undefined,
    weatherIcon: undefined,
    windDeg: undefined,
    windFeelText: undefined,
    windSpeed: undefined,
  });
};

const cleanForecast = (
  list: SchemaProps['forecastWeatherList']['list'],
  timezoneOffset: number
): ForecastClean[] =>
  list
    .filter((_, index) => (index + 1) % FORECAST_INTERVAL === 0)
    .map((day) => ({
      dayOfWeek: addSeconds(fromUnixTime(day.dt), timezoneOffset),
      forecastFeel: Math.round(day.main.feels_like),
      forecastIcon: day.weather[0].icon,
      forecastTemp: Math.round(day.main.temp),
      forecastWindDeg: day.wind.deg,
      forecastWindSpeed: day.wind.speed,
    }));

const requestWeather = (
  locationData?: string,
  lat?: number,
  lon?: number
): WeatherRequests | undefined => {
  if (lat !== undefined && lon !== undefined) {
    return [requestCurrLocation(lat, lon), requestCurrForecast(lat, lon)];
  }

  if (locationData) return [searchLocation(locationData), searchForecast(locationData)];
};

export const loadWeather = async (
  main: LitMain,
  locationData?: string,
  lat?: number,
  lon?: number
): Promise<void> => {
  resetWeather(main);
  main.isLoading = true;
  main.isFound = true;

  try {
    const requests = requestWeather(locationData, lat, lon);
    if (!requests) {
      main.isFound = false;
      return;
    }

    const [current, forecast] = await Promise.all(requests);
    if (!(current && forecast)) {
      main.isFound = false;
      return;
    }

    const { clouds, weather, main: currentMain, visibility, wind, sys, timezone, name } = current;
    const currentTime = new Date();
    const localTimezoneOffset = currentTime.getTimezoneOffset() * SECONDS_PER_MINUTE;
    const timezoneOffset = timezone + localTimezoneOffset;

    Object.assign(main, {
      city: name,
      clouds: clouds.all,
      country: REGION_NAMES_IN_ENGLISH.of(sys.country),
      currTime: addSeconds(currentTime, timezoneOffset),
      forecastData: cleanForecast(forecast.list, localTimezoneOffset),
      mainFeel: Math.round(currentMain.feels_like),
      mainHumidity: currentMain.humidity,
      mainTemp: Math.round(currentMain.temp),
      sunrise: addSeconds(fromUnixTime(sys.sunrise), timezoneOffset),
      sunset: addSeconds(fromUnixTime(sys.sunset), timezoneOffset),
      visibility: visibility / METERS_PER_KILOMETER,
      weatherDesc: weather[0].description,
      weatherIcon: weather[0].icon,
      windDeg: wind.deg,
      windSpeed: wind.speed,
    });

    main.checkMode();
    main.windFeel();
  } finally {
    main.isLoading = false;
  }
};

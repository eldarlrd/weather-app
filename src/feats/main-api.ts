import { addSeconds, fromUnixTime } from 'date-fns';

import type { ForecastClean } from '@/feats/main-template.ts';
import type { LitMain } from '@/main.ts';
import { requestCurrForecast, requestCurrLocation, searchForecast, searchLocation } from '%/api.ts';
import type { SchemaProps } from '%/schemas.ts';

const FORECAST_INTERVAL = 8;
const METERS_PER_KILOMETER = 1000;
const SECONDS_PER_MINUTE = 60;

const resetWeather = (main: LitMain): void => {
  main.clouds = undefined;
  main.mainTemp = undefined;
  main.mainFeel = undefined;
  main.mainHumidity = undefined;
  main.visibility = undefined;
  main.windSpeed = undefined;
  main.windDeg = undefined;
  main.weatherDesc = undefined;
  main.weatherIcon = undefined;
  main.city = undefined;
  main.country = undefined;
  main.windFeelText = undefined;
  main.sunrise = undefined;
  main.sunset = undefined;
  main.currTime = undefined;
  main.forecastData.length = 0;
};

const cleanForecast = (list: SchemaProps['forecastWeatherList']['list']): ForecastClean[] => {
  const timezoneOffset = new Date().getTimezoneOffset() * SECONDS_PER_MINUTE;

  return list
    .filter((_, index) => (index + 1) % FORECAST_INTERVAL === 0)
    .map((day) => ({
      dayOfWeek: addSeconds(fromUnixTime(day.dt), timezoneOffset),
      forecastFeel: Math.round(day.main.feels_like),
      forecastIcon: day.weather[0].icon,
      forecastTemp: Math.round(day.main.temp),
      forecastWindDeg: day.wind.deg,
      forecastWindSpeed: day.wind.speed,
    }));
};

export const loadWeather = async (
  main: LitMain,
  locationData?: string,
  lat?: number,
  lon?: number
): Promise<void> => {
  const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
  resetWeather(main);
  main.isLoading = true;
  main.isFound = true;

  let response: unknown;
  let forecast: unknown;

  if (lat !== undefined && lon !== undefined) {
    response = await requestCurrLocation(lat, lon);
    forecast = await requestCurrForecast(lat, lon);
  } else if (locationData) {
    response = await searchLocation(locationData);
    forecast = await searchForecast(locationData);
  }

  if (!(response && forecast)) {
    main.isFound = false;
    return;
  }

  const current = response as SchemaProps['currentWeatherAPI'];
  const { clouds, weather, main: currentMain, visibility, wind, sys, timezone, name } = current;
  main.clouds = clouds.all;
  main.mainTemp = Math.round(currentMain.temp);
  main.mainFeel = Math.round(currentMain.feels_like);
  main.mainHumidity = currentMain.humidity;
  main.visibility = visibility / METERS_PER_KILOMETER;
  main.windSpeed = wind.speed;
  main.windDeg = wind.deg;
  main.weatherDesc = weather[0].description;
  main.weatherIcon = weather[0].icon;
  main.city = name;

  const country = regionNamesInEnglish.of(sys.country);
  if (country) main.country = country;

  if (timezone !== 0) {
    const timezoneOffset = timezone + new Date().getTimezoneOffset() * SECONDS_PER_MINUTE;
    main.sunrise = addSeconds(fromUnixTime(sys.sunrise), timezoneOffset);
    main.sunset = addSeconds(fromUnixTime(sys.sunset), timezoneOffset);
    main.currTime = addSeconds(new Date(), timezoneOffset);
  }

  const { list } = forecast as SchemaProps['forecastWeatherList'];
  main.forecastData = cleanForecast(list);
  main.checkMode();
  main.windFeel();
  main.isLoading = false;
};

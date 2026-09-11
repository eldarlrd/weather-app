import { format } from 'date-fns';
import { type TemplateResult, html, nothing } from 'lit';

import moon from '#/moon.avif';
import type { LitMain } from '@/main.ts';
import { stylesheet } from '@/styles.ts';

interface ForecastClean {
  dayOfWeek: Date;
  forecastFeel: number;
  forecastIcon: string;
  forecastTemp: number;
  forecastWindDeg: number;
  forecastWindSpeed: number;
}

const KELVIN_OFFSET = 273;
const FAHRENHEIT_OFFSET = 32;
const FAHRENHEIT_MULTIPLIER = 1.8;
const IMPERIAL_WIND_MULTIPLIER = 2.24;
const IMPERIAL_DISTANCE_MULTIPLIER = 0.62;

const WEATHER_ICONS: Record<string, string> = {
  '01d': 'fa-sun',
  '01n': 'fa-moon',
  '02d': 'fa-cloud-sun',
  '02n': 'fa-cloud-moon',
  '03d': 'fa-cloud',
  '03n': 'fa-cloud',
  '04d': 'fa-cloud',
  '04n': 'fa-cloud',
  '09d': 'fa-cloud-showers-heavy',
  '09n': 'fa-cloud-showers-heavy',
  '10d': 'fa-cloud-sun-rain',
  '10n': 'fa-cloud-moon-rain',
  '11d': 'fa-cloud-bolt',
  '11n': 'fa-cloud-bolt',
  '13d': 'fa-snowflake',
  '13n': 'fa-snowflake',
  '50d': 'fa-smog',
  '50n': 'fa-smog',
};

const formatTemperature = (temperature: number, isMetric: boolean): string =>
  `${Math.round(
    isMetric
      ? temperature - KELVIN_OFFSET
      : (temperature - KELVIN_OFFSET) * FAHRENHEIT_MULTIPLIER + FAHRENHEIT_OFFSET
  )}`;

const renderTemperature = (
  temperature: number | undefined,
  isMetric: boolean,
  temperatureFormat: string
): string | typeof nothing =>
  temperature === undefined
    ? nothing
    : formatTemperature(temperature, isMetric) + temperatureFormat;

const renderWindDirection = (windDeg: number | undefined): TemplateResult | typeof nothing =>
  windDeg === undefined
    ? nothing
    : html`<i
      style="rotate: ${`${windDeg.toString()}deg`}" 
      class="fa-solid fa-arrow-down"></i>`;

const renderStatus = (main: LitMain): TemplateResult | typeof nothing =>
  main.isLoading && main.isFound
    ? html`<svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <style>
        .circle {
          transform-origin: center;
          animation: loading 0.75s infinite linear;
        }
        @keyframes loading {
          100% {
            transform: rotate(360deg);
          }
        }
      </style>
      <path
        d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
        class="circle"
        fill="white" />
    </svg>`
    : main.isFound
      ? nothing
      : html`<h2 id="error" class="w3-center w3-text-white">Location not found</h2>`;

const renderControls = (main: LitMain): TemplateResult => html`
  <lit-controls
    .apiCall=${main.apiCall}
    .isMetric=${main.isMetric}
    .switchSystem=${(isMetric: boolean): void => {
      main.switchSystem(isMetric);
    }}>
    <img
      src="${main.isDaytime ? 'favicon.png' : moon}"
      alt="A ${main.isDaytime ? 'sun' : 'moon'} behind a cloud by kosonicon"
      width="128"
      height="128"
      style="${main.isDaytime ? '' : 'scale: 1.15'}"
      class="w3-center w3-xlarge" />
  </lit-controls>
`;

const renderCurrentHeader = (main: LitMain): TemplateResult => html`
  <h1 class="w3-xxlarge w3-center">
    ${main.city}${main.country ? `, ${main.country}` : nothing}
  </h1>
  <h2 class="w3-xlarge w3-center w3-text-light-gray">
    ${main.city && main.currTime ? formatDate(main.currTime, main.hourFormat) : nothing}
  </h2>
`;

const formatDate = (date: Date, timeFormat: string): string =>
  `${format(date, 'eee, d MMM ’yy • ')}${format(date, timeFormat)}`;

const renderCurrentSummary = (main: LitMain): TemplateResult => html`
  <div id="current-weather">
    <span>
      <i class="fa-solid ${main.weatherIcon ? WEATHER_ICONS[main.weatherIcon] : nothing}"></i>
      <p>${renderTemperature(main.mainTemp, main.isMetric, main.temperatureFormat)}</p>
    </span>
    <div>
      <h3>
        ${
          main.weatherDesc
            ? main.weatherDesc.charAt(0).toUpperCase() + main.weatherDesc.slice(1)
            : nothing
        }
      </h3>
      <h4 class="w3-text-light-gray">
        ${
          main.mainFeel === undefined
            ? nothing
            : `Feels like ~${formatTemperature(main.mainFeel, main.isMetric)}${main.temperatureFormat}`
        }
      </h4>
      <h4 class="w3-text-light-gray">
        ${main.windSpeed === undefined ? nothing : main.windFeelText}
      </h4>
    </div>
  </div>
`;

const renderWindSpeed = (main: LitMain): string | typeof nothing =>
  main.windSpeed === undefined
    ? nothing
    : `${Math.round(
        main.isMetric ? main.windSpeed : main.windSpeed * IMPERIAL_WIND_MULTIPLIER
      )}${main.speedFormat}`;

const renderVisibility = (main: LitMain): string | typeof nothing =>
  main.visibility === undefined
    ? nothing
    : `${Math.round(
        main.isMetric ? main.visibility : main.visibility * IMPERIAL_DISTANCE_MULTIPLIER
      )}${main.distanceFormat}`;

const renderDetailedWeather = (main: LitMain): TemplateResult => html`
  <div id="detailed-weather">
    <span>
      <h4 class="w3-text-light-gray">${main.windSpeed === undefined ? nothing : 'Wind'}</h4>
      <h3>
        ${renderWindDirection(main.windDeg)}
        ${renderWindSpeed(main)}
      </h3>
    </span>
    <span>
      <h4 class="w3-text-light-gray">
        ${main.mainHumidity === undefined ? nothing : 'Humidity'}
      </h4>
      <h3>${main.mainHumidity === undefined ? nothing : `${main.mainHumidity}%`}</h3>
    </span>
    <span>
      <h4 class="w3-text-light-gray">
        ${main.visibility === undefined ? nothing : 'Visibility'}
      </h4>
      <h3>
        ${renderVisibility(main)}
      </h3>
    </span>
    <span>
      <h4 class="w3-text-light-gray">${main.clouds === undefined ? nothing : 'Cloudiness'}</h4>
      <h3>${main.clouds === undefined ? nothing : `${main.clouds}%`}</h3>
    </span>
    <span>
      <h4 class="w3-text-light-gray">${main.sunrise ? 'Sunrise' : nothing}</h4>
      <h3>${main.sunrise ? formatTimeValue(main.sunrise, main.hourFormat) : nothing}</h3>
    </span>
    <span>
      <h4 class="w3-text-light-gray">${main.sunset ? 'Sunset' : nothing}</h4>
      <h3>${main.sunset ? formatTimeValue(main.sunset, main.hourFormat) : nothing}</h3>
    </span>
  </div>
`;

const formatTimeValue = (date: Date, timeFormat: string): string => format(date, timeFormat);

const renderCurrent = (main: LitMain): TemplateResult => html`
  <lit-current>
    ${renderCurrentHeader(main)}
    <span id="weather-container">
      ${renderCurrentSummary(main)} ${renderDetailedWeather(main)}
    </span>
  </lit-current>
`;

const renderForecastDay = (day: ForecastClean, main: LitMain): TemplateResult => html`
  <div class="forecast-list-elem">
    <h4 class="forecast-day">${format(day.dayOfWeek, 'EEEE')}</h4>
    <span class="forecast-temp" title="Temperature">
      <i class="fa-solid ${WEATHER_ICONS[day.forecastIcon]}"></i>
      <h4>${renderTemperature(day.forecastTemp, main.isMetric, main.temperatureFormat)}</h4>
    </span>
    <h4 title="Feels like" class="forecast-feel w3-text-light-gray">
      ~${formatTemperature(day.forecastFeel, main.isMetric)}${main.temperatureFormat}
    </h4>
    <h4 class="forecast-wind" title="Wind speed">
      ${renderWindDirection(day.forecastWindDeg)}
      ${
        Math.round(
          main.isMetric ? day.forecastWindSpeed : day.forecastWindSpeed * IMPERIAL_WIND_MULTIPLIER
        ) + main.speedFormat
      }
    </h4>
  </div>
`;

const renderForecast = (main: LitMain): TemplateResult => html`
  <lit-forecast>
    ${main.forecastData.map((day) => renderForecastDay(day, main))}
  </lit-forecast>
`;

const renderMain = (main: LitMain): TemplateResult => html`
  ${stylesheet}
  ${renderControls(main)} ${renderStatus(main)} ${renderCurrent(main)} ${renderForecast(main)}
  <lit-footer></lit-footer>
`;

export { type ForecastClean, renderMain };

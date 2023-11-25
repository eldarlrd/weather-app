/**
 * @license AGPL-3.0-only
 * Weather App - A Weather app
 * Copyright (C) 2023 Eldar Pashazade <eldarlrd@pm.me>
 *
 * This file is part of Weather App.
 *
 * Weather App is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, version 3.
 *
 * Weather App is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Weather App. If not, see <https://www.gnu.org/licenses/>.
 */

import {
  addSeconds,
  format,
  fromUnixTime,
  isAfter,
  isBefore,
  set
} from 'date-fns';
import { type TemplateResult, LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@/components/controls.ts';
import '@/components/current.ts';
import '@/components/forecast.ts';
import '@/components/footer.ts';

import {
  requestCurrForecast,
  requestCurrLocation,
  searchForecast,
  searchLocation
} from '@/api.ts';
import dayTime from '@/assets/dayTime.avif';
import moonCloud from '@/assets/moonCloud.png';
import nightTime from '@/assets/nightTime.avif';
import { type LitControls } from '@/components/controls.ts';
import { type LitCurrent } from '@/components/current.ts';
import { type LitFooter } from '@/components/footer.ts';
import { type LitForecast } from '@/components/forecast.ts';
import { stylesheet } from '@/styles.ts';

interface CurrentWeatherAPI {
  clouds: { all: number };
  main: { temp: number; feels_like: number; humidity: number };
  visibility: number;
  wind: { speed: number; deg: number };
  weather: { description: string; icon: string }[];
  sys: { country: string; sunrise: number; sunset: number };
  name: string;
  timezone: number;
}

interface ForecastWeatherAPI {
  dt: number;
  main: { temp: number; feels_like: number; humidity: number };
  wind: { speed: number; deg: number };
  weather: { description: string; icon: string }[];
}

interface ForecastList {
  list: ForecastWeatherAPI[];
}

interface ForecastClean {
  dayOfWeek: Date;
  forecastTemp: number;
  forecastFeel: number;
  forecastWindSpeed: number;
  forecastWindDeg: number;
  forecastIcon: string;
}

// d for Day, n for Night
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
  '50n': 'fa-smog'
};

// Beaufort Scale
const WIND_FEEL_ARRAY = [
  { maxSpeed: 0.3, description: 'Calm' },
  { maxSpeed: 1.7, description: 'Light winds' },
  { maxSpeed: 3.3, description: 'Light breeze' },
  { maxSpeed: 5.6, description: 'Gentle breeze' },
  { maxSpeed: 8.1, description: 'Moderate breeze' },
  { maxSpeed: 10.8, description: 'Fresh breeze' },
  { maxSpeed: 13.9, description: 'Strong breeze' },
  { maxSpeed: 17.2, description: 'Moderate gale' },
  { maxSpeed: 20.8, description: 'Fresh gale' },
  { maxSpeed: 24.7, description: 'Strong gale' },
  { maxSpeed: 28.6, description: 'Whole gale' },
  { maxSpeed: 33.1, description: 'Storm' },
  { maxSpeed: Infinity, description: 'Hurricane' }
];

@customElement('lit-main')
export class LitMain extends LitElement {
  // Current Weather
  @property({ type: Number })
  accessor clouds!: number; // %
  @property({ type: Number })
  accessor mainTemp!: number; // K
  @property({ type: Number })
  accessor mainFeel!: number; // K
  @property({ type: Number })
  accessor mainHumidity!: number; // %
  @property({ type: Number })
  accessor visibility!: number; // km
  @property({ type: Number })
  accessor windSpeed!: number; // m/s
  @property({ type: Number })
  accessor windDeg!: number; // deg

  @property({ type: String })
  accessor weatherDesc!: string; // e.g. Clear sky
  @property({ type: String })
  accessor weatherIcon!: string; // id
  @property({ type: String })
  accessor city!: string; // City name
  @property({ type: String })
  accessor country!: string; // Country name
  @property({ type: String })
  accessor windFeelText!: string; // e.g. Calm

  @property({ attribute: false })
  accessor sunrise!: Date; // h
  @property({ attribute: false })
  accessor sunset!: Date; // h
  @property({ attribute: false })
  accessor currTime!: Date; // h

  @property({ type: Boolean })
  accessor isMetric = localStorage.isMetric === 'false' ? false : true;
  @property({ type: Boolean })
  accessor isLoading!: boolean;
  @property({ type: Boolean })
  accessor isFound!: boolean;

  // Forecast Weather
  @property({ type: Array })
  accessor forecastData: ForecastClean[] = [];

  // Measurement System
  @property({ type: String })
  accessor hourFormat!: string;
  @property({ type: String })
  accessor temperatureFormat!: string;
  @property({ type: String })
  accessor speedFormat!: string;
  @property({ type: String })
  accessor distanceFormat!: string;

  // Dark Mode
  @property({ type: Boolean })
  accessor isDaytime = true;

  protected render(): TemplateResult {
    return html`
      ${stylesheet}
      <lit-controls
        .apiCall=${this.apiCall}
        .isMetric=${this.isMetric}
        .switchSystem=${(e: boolean): void => {
          this.switchSystem(e);
        }}>
        <img
          src="${this.isDaytime ? 'favicon.png' : moonCloud}"
          alt="A ${this.isDaytime ? 'sun' : 'moon'} behind a cloud by kosonicon"
          width="128"
          height="128"
          style="${this.isDaytime ? '' : 'scale: 1.15'}"
          class="w3-center w3-xlarge" />
      </lit-controls>

      ${this.isLoading && this.isFound
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
        : !this.isFound
          ? html`<h2 class="w3-center w3-text-white">Location not found</h2>`
          : nothing}

      <lit-current>
        <h1 class="w3-xxlarge w3-center">
          ${this.city}${this.country ? ', ' + this.country : nothing}
        </h1>
        <h2 class="w3-xlarge w3-center w3-text-light-gray">
          ${this.city
            ? format(this.currTime, "eee., d MMM. y | 'at' ") +
              format(this.currTime, this.hourFormat)
            : nothing}
        </h2>

        <span id="weather-container">
          <div id="current-weather">
            <span>
              <i class="fa-solid ${WEATHER_ICONS[this.weatherIcon]}"></i>
              <p>
                ${this.mainTemp !== undefined && !isNaN(this.mainTemp)
                  ? Math.round(
                      this.isMetric
                        ? this.mainTemp - 273
                        : (this.mainTemp - 273) * 1.8 + 32
                    ) + this.temperatureFormat
                  : nothing}
              </p>
            </span>
            <div>
              <h3>
                ${this.weatherDesc
                  ? this.weatherDesc.charAt(0).toUpperCase() +
                    this.weatherDesc.slice(1)
                  : nothing}
              </h3>
              <h4 class="w3-text-light-gray">
                ${this.mainFeel !== undefined && !isNaN(this.mainFeel)
                  ? 'Feels like ' +
                    Math.round(
                      this.isMetric
                        ? this.mainFeel - 273
                        : (this.mainFeel - 273) * 1.8 + 32
                    ) +
                    this.temperatureFormat
                  : nothing}
              </h4>
              <h4 class="w3-text-light-gray">
                ${this.windSpeed !== undefined ? this.windFeelText : nothing}
              </h4>
            </div>
          </div>

          <div id="detailed-weather">
            <span>
              <h4 class="w3-text-light-gray">
                ${this.windSpeed !== undefined ? 'Wind' : nothing}
              </h4>
              <h3>
                ${this.windDeg !== undefined
                  ? html`<i
                      style="rotate: ${this.windDeg.toString() + 'deg'}"
                      class="fa-solid fa-arrow-down"></i>`
                  : nothing}
                ${this.windSpeed !== undefined
                  ? Math.round(
                      this.isMetric ? this.windSpeed : this.windSpeed * 2.24
                    ) + this.speedFormat
                  : nothing}
              </h3>
            </span>

            <span>
              <h4 class="w3-text-light-gray">
                ${this.mainHumidity !== undefined ? 'Humidity' : nothing}
              </h4>
              <h3>
                ${this.mainHumidity !== undefined
                  ? this.mainHumidity + '%'
                  : nothing}
              </h3>
            </span>

            <span>
              <h4 class="w3-text-light-gray">
                ${this.visibility !== undefined && !isNaN(this.visibility)
                  ? 'Visibility'
                  : nothing}
              </h4>
              <h3>
                ${this.visibility !== undefined && !isNaN(this.visibility)
                  ? Math.round(
                      this.isMetric ? this.visibility : this.visibility * 0.62
                    ) + this.distanceFormat
                  : nothing}
              </h3>
            </span>

            <span>
              <h4 class="w3-text-light-gray">
                ${this.clouds !== undefined ? 'Cloudiness' : nothing}
              </h4>
              <h3>
                ${this.clouds !== undefined ? this.clouds + '%' : nothing}
              </h3>
            </span>

            <span>
              <h4 class="w3-text-light-gray">
                ${this.sunrise ? 'Sunrise' : nothing}
              </h4>
              <h3>
                ${this.sunrise
                  ? format(this.sunrise, this.hourFormat)
                  : nothing}
              </h3>
            </span>

            <span>
              <h4 class="w3-text-light-gray">
                ${this.sunset ? 'Sunset' : nothing}
              </h4>
              <h3>
                ${this.sunset ? format(this.sunset, this.hourFormat) : nothing}
              </h3>
            </span>
          </div>
        </span>
      </lit-current>

      <lit-forecast>
        ${this.forecastData.length > 0
          ? this.forecastData.map(
              (day: ForecastClean) =>
                html`<div class="forecast-list-elem">
                  <h4 class="forecast-day">${format(day.dayOfWeek, 'EEEE')}</h4>

                  <span class="forecast-temp" title="Temperature">
                    <i class="fa-solid ${WEATHER_ICONS[day.forecastIcon]}"></i>
                    <h4>
                      ${day.forecastTemp !== undefined &&
                      !isNaN(day.forecastTemp)
                        ? Math.round(
                            this.isMetric
                              ? day.forecastTemp - 273
                              : (day.forecastTemp - 273) * 1.8 + 32
                          ) + this.temperatureFormat
                        : nothing}
                    </h4>
                  </span>

                  <h4
                    title="Feels like"
                    class="forecast-feel w3-text-light-gray">
                    ${day.forecastFeel !== undefined && !isNaN(day.forecastFeel)
                      ? Math.round(
                          this.isMetric
                            ? day.forecastFeel - 273
                            : (day.forecastFeel - 273) * 1.8 + 32
                        ) + this.temperatureFormat
                      : nothing}
                  </h4>

                  <h4 class="forecast-wind" title="Wind speed">
                    ${day.forecastWindDeg !== undefined
                      ? html`<i
                          style="rotate: ${day.forecastWindDeg.toString() +
                          'deg'}"
                          class="fa-solid fa-arrow-down"></i>`
                      : nothing}
                    ${day.forecastWindSpeed !== undefined
                      ? Math.round(
                          this.isMetric
                            ? day.forecastWindSpeed
                            : day.forecastWindSpeed * 2.24
                        ) + this.speedFormat
                      : nothing}
                  </h4>
                </div>`
            )
          : nothing}
      </lit-forecast>

      <lit-footer></lit-footer>
    `;
  }

  public apiCall = async (
    locationData?: string,
    lat?: number,
    lon?: number
  ): Promise<void> => {
    const regionNamesInEnglish = new Intl.DisplayNames(['en'], {
      type: 'region'
    });

    // Reset State
    this.clouds = undefined as unknown as number;
    this.mainTemp = undefined as unknown as number;
    this.mainFeel = undefined as unknown as number;
    this.mainHumidity = undefined as unknown as number;
    this.visibility = undefined as unknown as number;
    this.windSpeed = undefined as unknown as number;
    this.windDeg = undefined as unknown as number;

    this.weatherDesc = undefined as unknown as string;
    this.weatherIcon = undefined as unknown as string;
    this.city = undefined as unknown as string;
    this.country = undefined as unknown as string;
    this.windFeelText = undefined as unknown as string;

    this.sunrise = undefined as unknown as Date;
    this.sunset = undefined as unknown as Date;
    this.currTime = undefined as unknown as Date;

    if (this.forecastData) this.forecastData.length = 0;

    this.isLoading = true;
    this.isFound = true;

    let response: unknown;
    let forecast: unknown;
    if (lat && lon) {
      response = await requestCurrLocation(lat, lon);
      forecast = await requestCurrForecast(lat, lon);
    } else if (locationData) {
      response = await searchLocation(locationData);
      forecast = await searchForecast(locationData);
    }
    if (!response || !forecast) {
      this.isFound = false;
      return;
    }
    const { clouds, weather, main, visibility, wind, sys, timezone, name } =
      response as CurrentWeatherAPI;
    this.clouds = clouds?.all;
    this.mainTemp = Math.round(main?.temp);
    this.mainFeel = Math.round(main?.feels_like);
    this.mainHumidity = main?.humidity;
    this.visibility = visibility / 1000;
    this.windSpeed = wind?.speed;
    this.windDeg = wind?.deg;

    if (weather) {
      this.weatherDesc = weather[0].description;
      this.weatherIcon = weather[0].icon;
    }

    this.city = name;
    let country: string | undefined;
    if (sys) country = regionNamesInEnglish.of(sys.country);
    if (country) this.country = country;
    if (timezone !== undefined) {
      this.sunrise = addSeconds(
        fromUnixTime(sys?.sunrise),
        timezone + new Date().getTimezoneOffset() * 60
      );
      this.sunset = addSeconds(
        fromUnixTime(sys?.sunset),
        timezone + new Date().getTimezoneOffset() * 60
      );
      this.currTime = addSeconds(
        new Date(),
        timezone + new Date().getTimezoneOffset() * 60
      );
    }

    const { list } = forecast as ForecastList;
    const selectedDays = list.filter((_, i) => (i + 1) % 8 === 0);

    for (const day of selectedDays) {
      const dayOfWeek = addSeconds(
        fromUnixTime(day.dt),
        new Date().getTimezoneOffset() * 60
      );

      const forecastTemp = Math.round(day.main?.temp);
      const forecastFeel = Math.round(day.main?.feels_like);

      const forecastWindSpeed = day.wind?.speed;
      const forecastWindDeg = day.wind?.deg;

      const forecastIcon = day.weather[0].icon;
      const cleanDay = {
        dayOfWeek,
        forecastTemp,
        forecastFeel,
        forecastWindSpeed,
        forecastWindDeg,
        forecastIcon
      };
      this.forecastData.push(cleanDay);
    }

    this.checkMode();
    this.windFeel();
    this.isLoading = false;
  };

  public windFeel = (): void => {
    for (const arr of WIND_FEEL_ARRAY)
      if (this.windSpeed < arr.maxSpeed) {
        this.windFeelText = arr.description;
        return;
      }
  };

  public checkMode(): void {
    const sixAM = set(this.currTime, { hours: 6 });
    const sixPM = set(this.currTime, { hours: 18 });

    const isAfterAM = isAfter(this.currTime, sixAM);
    const isBeforePM = isBefore(this.currTime, sixPM);

    this.isDaytime = isAfterAM && isBeforePM ? true : false;

    const dayPrimary = '#0ea5e9'; // tw-sky-500
    const daySecondary = '#7dd3fc'; // tw-sky-300
    const dayAccent = '#f59e0b'; // tw-amber-500
    const dayBg = `url(${dayTime})`;
    const dayOpaqueBg = '#0ea5e980';

    const nightPrimary = '#1e293b'; // tw-slate-800
    const nightSecondary = '#475569'; // tw-slate-600
    const nightAccent = '#eab308'; // tw-yellow-500
    const nightBg = `url(${nightTime})`;
    const nightOpaqueBg = '#1e293b80';

    const rootStyles = document.documentElement.style;
    rootStyles.setProperty(
      '--bg-primary',
      this.isDaytime ? dayPrimary : nightPrimary
    );
    rootStyles.setProperty(
      '--bg-secondary',
      this.isDaytime ? daySecondary : nightSecondary
    );
    rootStyles.setProperty(
      '--bg-accent',
      this.isDaytime ? dayAccent : nightAccent
    );
    rootStyles.setProperty(
      'background-image',
      this.isDaytime ? dayBg : nightBg
    );

    const bodyStyles = document.body.style;
    bodyStyles.setProperty(
      'background-color',
      this.isDaytime ? dayOpaqueBg : nightOpaqueBg
    );
  }

  public firstUpdated(): void {
    if (localStorage.isMetric) {
      const storedMetric = localStorage.getItem('isMetric');
      this.isMetric = storedMetric
        ? (JSON.parse(storedMetric) as boolean)
        : true;
    }

    this.switchFormat(this.isMetric);

    if (navigator.geolocation) {
      this.getCurrentPosition()
        .then((position: GeolocationPosition) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          return this.apiCall('', lat, lon);
        })
        .catch((error: GeolocationPositionError) => {
          console.log(`${error.message} -> Setting a default location.`);
          return this.apiCall('Baku, Azerbaijan');
        });
    }
  }

  private getCurrentPosition(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  public switchSystem(isMetric: boolean): void {
    localStorage.setItem('isMetric', JSON.stringify(isMetric));
    this.switchFormat(isMetric);
  }

  public switchFormat(isMetric: boolean): void {
    if (isMetric) {
      this.isMetric = isMetric;
      this.hourFormat = 'H:MM';
      this.temperatureFormat = ' °C';
      this.speedFormat = ' m/s';
      this.distanceFormat = ' km';
      this.requestUpdate('isMetric', true);
    } else {
      this.isMetric = isMetric;
      this.hourFormat = 'h:mm a';
      this.temperatureFormat = ' °F';
      this.speedFormat = ' mph';
      this.distanceFormat = ' mi';
      this.requestUpdate('isMetric', true);
    }
  }

  public static styles = css`
    ::selection {
      background-color: var(--bg-primary);
    }

    :host {
      min-height: 100svh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      font-family: 'Signika', sans-serif;
      font-weight: 300;
    }

    img {
      filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));
    }

    h1,
    h2,
    h3,
    h4,
    p,
    i {
      font-family: 'Signika', sans-serif;
      word-break: break-word;
      filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
        drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
    }

    svg {
      padding-top: 1.25rem;
      z-index: -1;
      scale: 4;
    }

    #weather-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    #current-weather {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: -1rem;

      & span {
        display: inherit;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        font-size: 4rem;
        line-height: 1rem;
        margin-bottom: -1.5rem;
      }

      & div {
        display: inherit;
        flex-direction: column;
        justify-content: center;
        width: fit-content;

        & h4 {
          margin-top: -0.5rem;
        }
      }
    }

    #detailed-weather {
      margin-top: 0.5rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, auto);
      width: fit-content;
      gap: 1rem 4rem;

      & span {
        display: flex;
        flex-direction: column;
        align-items: center;

        & h3 {
          margin-top: -2px;
          display: inherit;
          align-items: center;
          gap: 0.5rem;
        }
      }
    }

    .forecast-list-elem {
      display: grid;
      grid-template-rows: auto auto;
      grid-template-columns: auto auto;
      gap: 0 4rem;
      place-items: center;
      grid-template-areas:
        'item1 item4'
        'item2 item3';

      .forecast-day {
        grid-area: item1;
        font-weight: 600;
      }

      .forecast-temp {
        grid-area: item2;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        & i {
          filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
            drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
        }
      }

      .forecast-feel {
        grid-area: item3;
      }

      .forecast-wind {
        grid-area: item4;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        & i {
          filter: drop-shadow(0 0 0 rgb(0 0 0)) !important;
        }
      }
    }

    .forecast-list-elem:not(:last-child) {
      border-bottom: 2px solid white;
    }

    @media (min-width: 48rem) {
      #weather-container {
        flex-direction: row;
        gap: 2rem;
      }

      .forecast-list-elem {
        grid-template-rows: 1fr;
        grid-template-columns: repeat(4, 1fr);
        grid-template-areas: 'item1 item2 item3 item4';
        place-items: normal;
        gap: 0 4rem;

        & > * {
          flex-basis: auto;
        }
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'lit-main': LitMain;
    'lit-controls': LitControls;
    'lit-current': LitCurrent;
    'lit-forecast': LitForecast;
    'lit-footer': LitFooter;
  }
}

// Easter Egg
console.log(
  'Patrolling the Mojave almost makes you wish for a nuclear winter.'
);

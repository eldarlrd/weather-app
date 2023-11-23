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

import { addSeconds, format, fromUnixTime } from 'date-fns';
import { type TemplateResult, LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@/components/controls.ts';
import '@/components/current.ts';
import '@/components/forecast.ts';
import '@/components/footer.ts';

import { searchLocation } from '@/api.ts';
import { type LitControls } from '@/components/controls.ts';
import { type LitCurrent } from '@/components/current.ts';
import { type LitFooter } from '@/components/footer.ts';
import { type LitForecast } from '@/components/forecast.ts';
import { stylesheet } from '@/styles.ts';

// interface Coordinates {
//   lat: number;
//   lon: number;
// }

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

// d for Day, n for Night
// const WEATHER_ICONS: Record<string, string> = {
//   '01d': 'fa-sun',
//   '01n': 'fa-moon',
//   '02d': 'fa-cloud-sun',
//   '02n': 'fa-cloud-moon',
//   '03d': 'fa-cloud',
//   '03n': 'fa-cloud',
//   '04d': 'fa-cloud',
//   '04n': 'fa-cloud',
//   '09d': 'fa-cloud-showers-heavy',
//   '09n': 'fa-cloud-showers-heavy',
//   '10d': 'fa-cloud-sun-rain',
//   '10n': 'fa-cloud-moon-rain',
//   '11d': 'fa-cloud-bolt',
//   '11n': 'fa-cloud-bolt',
//   '13d': 'fa-snowflake',
//   '13n': 'fa-snowflake',
//   '50d': 'fa-smog',
//   '50n': 'fa-smog'
// };

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

  @property({ attribute: false })
  accessor sunrise!: Date; // h
  @property({ attribute: false })
  accessor sunset!: Date; // h
  @property({ attribute: false })
  accessor currTime!: Date; // h

  protected render(): TemplateResult {
    return html`
      ${stylesheet}
      <lit-controls .apiCall=${this.apiCall}></lit-controls>
      <lit-current>
        <h1 class="w3-xxlarge w3-center">
          Baku, Azerbaijan
          ${this.city}${this.country ? ', ' + this.country : nothing}
        </h1>
        <h2 class="w3-xlarge w3-center w3-text-light-gray">
          ${this.city
            ? format(this.currTime, "eee., d MMM. y | 'at' HH:MM")
            : nothing}
          Thu., Nov. 23, 2023
        </h2>

        <div id="currentWeather">
          <span>
            <i class="fa-solid fa-cloud-bolt"></i>
            <p>${this.mainTemp ? this.mainTemp - 273 + ' °C' : '14 °C'}</p>
          </span>
          <div>
            <h3 class="w3-center">
              ${this.weatherDesc
                ? this.weatherDesc.charAt(0).toUpperCase() +
                  this.weatherDesc.slice(1)
                : 'Broken clouds'}
            </h3>
            <p>
              Feels like
              ${this.mainFeel ? this.mainFeel - 273 + ' °C' : '14 °C'}
            </p>
          </div>
        </div>

        <p>humid: ${this.mainHumidity}</p>
        <p>vis: ${this.visibility}</p>
        <p>windspeed: ${this.windSpeed}</p>
        <p>winddeg: ${this.windDeg}</p>
        <p>sunrise: ${this.sunrise}</p>
        <p>sunset: ${this.sunset}</p>
        <p>clouds: ${this.clouds}</p>
      </lit-current>
      <lit-forecast></lit-forecast>
      <lit-footer></lit-footer>
    `;
  }

  public apiCall = async (locationData: string): Promise<void> => {
    const regionNamesInEnglish = new Intl.DisplayNames(['en'], {
      type: 'region'
    });

    const response = await searchLocation(locationData);
    if (!response) return;
    const { clouds, weather, main, visibility, wind, sys, timezone, name } =
      response as CurrentWeatherAPI;
    this.clouds = clouds.all;
    this.mainTemp = Math.round(main.temp);
    this.mainFeel = Math.round(main.feels_like);
    this.mainHumidity = main.humidity;
    this.visibility = visibility / 1000;
    this.windSpeed = wind.speed;
    this.windDeg = wind.deg;

    this.weatherDesc = weather[0].description;
    this.weatherIcon = weather[0].icon;

    this.city = name;
    const country = regionNamesInEnglish.of(sys.country);
    if (country) this.country = country;
    this.sunrise = addSeconds(
      fromUnixTime(sys.sunrise),
      timezone + new Date().getTimezoneOffset() * 60
    );
    this.sunset = addSeconds(
      fromUnixTime(sys.sunset),
      timezone + new Date().getTimezoneOffset() * 60
    );
    this.currTime = addSeconds(
      new Date(),
      timezone + new Date().getTimezoneOffset() * 60
    );
  };

  public static styles = css`
    ::selection {
      background-color: #0ea5e9;
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

    h1,
    h2,
    h3 {
      font-family: 'Signika', sans-serif;
      word-break: break-word;
    }

    #currentWeather {
      display: flex;
      flex-direction: column;
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

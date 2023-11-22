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

import { addSeconds, fromUnixTime } from 'date-fns';
import { type TemplateResult, LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@/components/controls.ts';
import '@/components/current.ts';
import '@/components/forecast.ts';
import '@/components/footer.ts';
import { requestCurrWeather, searchLocation } from '@/api.ts';
import { type LitControls } from '@/components/controls.ts';
import { type LitCurrent } from '@/components/current.ts';
import { type LitFooter } from '@/components/footer.ts';
import { type LitForecast } from '@/components/forecast.ts';

interface Coordinates {
  lat: number;
  lon: number;
}

interface WeatherAPI {
  clouds: { all: number };
  main: { temp: number; feels_like: number; humidity: number };
  weather: { main: string; description: string; icon: string };
  visibility: number;
  wind: { speed: number; deg: number };
  sys: { country: string; sunrise: number; sunset: number };
  timezone: number;
}

@customElement('lit-main')
class LitMain extends LitElement {
  @property({ type: Number })
  accessor clouds = 0; // %
  @property({ type: Number })
  accessor mainTemp = 0; // K
  @property({ type: Number })
  accessor mainFeel = 0; // K
  @property({ type: Number })
  accessor mainHumidity = 0; // %
  @property({ type: String })
  accessor weatherMain = ''; // e.g. Clouds
  @property({ type: String })
  accessor weatherDesc = ''; // e.g. Few clouds
  @property({ type: String })
  accessor weatherIcon = ''; // id
  @property({ type: Number })
  accessor visibility = 0; // km
  @property({ type: Number })
  accessor windSpeed = 0; // m/s
  @property({ type: Number })
  accessor windDeg = 0; // deg
  @property({ type: String })
  accessor country = ''; // Country name
  @property({ attribute: false })
  accessor sunrise = new Date(); // h
  @property({ attribute: false })
  accessor sunset = new Date(); // h

  protected render(): TemplateResult {
    return html`
      <lit-controls .apiCall=${this.apiCall}></lit-controls>
      <lit-current>
        <p slot="cloudiness">${this.clouds}</p>
      </lit-current>
      <lit-forecast></lit-forecast>
      <lit-footer></lit-footer>
    `;
  }

  public apiCall = async (locationData: string): Promise<void> => {
    const regionNamesInEnglish = new Intl.DisplayNames(['en'], {
      type: 'region'
    });

    const coordinatesArr = await searchLocation(locationData);
    if (coordinatesArr) {
      const response = await requestCurrWeather(
        (coordinatesArr as Coordinates[])[0].lat,
        (coordinatesArr as Coordinates[])[0].lon
      );
      const { clouds, weather, main, visibility, wind, sys, timezone } =
        response as WeatherAPI;
      this.clouds = clouds.all;
      this.mainTemp = Math.round(main.temp);
      this.mainFeel = Math.round(main.feels_like);
      this.mainHumidity = main.humidity;
      this.weatherMain = weather.main;
      this.weatherDesc = weather.description;
      this.weatherIcon = weather.icon;
      this.visibility = visibility / 1000;
      this.windSpeed = wind.speed;
      this.windDeg = wind.deg;
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
    }
  };

  public static styles = css`
    :host {
      min-height: 100svh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      font-family: 'Signika', sans-serif;
      font-weight: 300;
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

export { type WeatherAPI, LitMain };

// Easter Egg
console.log(
  'Patrolling the Mojave almost makes you wish for a nuclear winter.'
);

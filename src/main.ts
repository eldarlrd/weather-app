/**
 * @license AGPL-3.0-only
 * Weather App - A Weather app
 * Copyright (C) 2023-2026 Eldar Paşazadə <eldarlrd@pm.me>
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

import { isAfter, isBefore } from 'date-fns';
import { LitElement, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@/components/controls.ts';
import '@/components/current.ts';
import '@/components/forecast.ts';
import '@/components/footer.ts';

import day from '#/day.avif';
import night from '#/night.avif';
import type { LitControls } from '@/components/controls.ts';
import type { LitCurrent } from '@/components/current.ts';
import type { LitFooter } from '@/components/footer.ts';
import type { LitForecast } from '@/components/forecast.ts';
import { loadWeather } from '@/feats/main-api.ts';
import { mainStyles } from '@/feats/main-styles.ts';
import { type ForecastClean, renderMain } from '@/feats/main-template.ts';

// Beaufort Scale
const WIND_FEEL_ARRAY = [
  { description: 'Calm', maxSpeed: 0.3 },
  { description: 'Light winds', maxSpeed: 1.7 },
  { description: 'Light breeze', maxSpeed: 3.3 },
  { description: 'Gentle breeze', maxSpeed: 5.6 },
  { description: 'Moderate breeze', maxSpeed: 8.1 },
  { description: 'Fresh breeze', maxSpeed: 10.8 },
  { description: 'Strong breeze', maxSpeed: 13.9 },
  { description: 'Moderate gale', maxSpeed: 17.2 },
  { description: 'Fresh gale', maxSpeed: 20.8 },
  { description: 'Strong gale', maxSpeed: 24.7 },
  { description: 'Whole gale', maxSpeed: 28.6 },
  { description: 'Storm', maxSpeed: 33.1 },
  { description: 'Hurricane', maxSpeed: Infinity },
];

@customElement('lit-main')
class LitMain extends LitElement {
  public static styles = mainStyles;
  // Current Weather
  @property({ type: Number })
  accessor clouds: number | undefined = undefined; // %
  @property({ type: Number })
  accessor mainTemp: number | undefined = undefined; // K
  @property({ type: Number })
  accessor mainFeel: number | undefined = undefined; // K
  @property({ type: Number })
  accessor mainHumidity: number | undefined = undefined; // %
  @property({ type: Number })
  accessor visibility: number | undefined = undefined; // km
  @property({ type: Number })
  accessor windSpeed: number | undefined = undefined; // m/s
  @property({ type: Number })
  accessor windDeg: number | undefined = undefined; // deg
  @property({ type: String })
  accessor weatherDesc: string | undefined = undefined; // e.g. Clear sky
  @property({ type: String })
  accessor weatherIcon: string | undefined = undefined; // id
  @property({ type: String })
  accessor city: string | undefined = undefined; // City name
  @property({ type: String })
  accessor country: string | undefined = undefined; // Country name
  @property({ type: String })
  accessor windFeelText: string | undefined = undefined; // e.g. Calm
  @property({ attribute: false })
  accessor sunrise: Date | undefined = undefined; // h
  @property({ attribute: false })
  accessor sunset: Date | undefined = undefined; // h
  @property({ attribute: false })
  accessor currTime: Date | undefined = undefined; // h
  @property({ type: Boolean })
  accessor isMetric = localStorage.isMetric !== 'false';
  @property({ type: Boolean })
  accessor isLoading = false as boolean;

  // Forecast Weather
  @property({ type: Array })
  accessor forecastData: ForecastClean[] = [];
  @property({ type: Boolean })
  accessor isFound = false as boolean;
  // Measurement System
  @property({ type: String })
  accessor hourFormat = 'HH:mm';
  @property({ type: String })
  accessor temperatureFormat = ' °C';
  @property({ type: String })
  accessor speedFormat = ' m/s';
  @property({ type: String })
  accessor distanceFormat = ' km';
  // Dark Mode
  @property({ type: Boolean })
  accessor isDaytime = true as boolean;

  private static getCurrentPosition(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      globalThis.navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  public readonly apiCall = (locationData?: string, lat?: number, lon?: number): Promise<void> =>
    loadWeather(this, locationData, lat, lon);

  public readonly windFeel = (): void => {
    if (this.windSpeed === undefined) return;

    for (const arr of WIND_FEEL_ARRAY)
      if (this.windSpeed < arr.maxSpeed) {
        this.windFeelText = arr.description;

        return;
      }
  };

  public checkMode(): void {
    if (!(this.currTime && this.sunrise && this.sunset)) return;

    const isAfterAM = isAfter(this.currTime, this.sunrise);
    const isBeforePM = isBefore(this.currTime, this.sunset);

    this.isDaytime = isAfterAM && isBeforePM;

    const dayPrimary = '#0ea5e9'; // tw-sky-500
    const daySecondary = '#7dd3fc'; // tw-sky-300
    const dayAccent = '#f59e0b'; // tw-amber-500
    const dayBg = `url(${day})`;
    const dayOpaqueBg = '#0ea5e980';

    const nightPrimary = '#1e293b'; // tw-slate-800
    const nightSecondary = '#475569'; // tw-slate-600
    const nightAccent = '#eab308'; // tw-yellow-500
    const nightBg = `url(${night})`;
    const nightOpaqueBg = '#1e293b80';

    const rootStyles = document.documentElement.style;

    rootStyles.setProperty('--bg-primary', this.isDaytime ? dayPrimary : nightPrimary);
    rootStyles.setProperty('--bg-secondary', this.isDaytime ? daySecondary : nightSecondary);
    rootStyles.setProperty('--bg-accent', this.isDaytime ? dayAccent : nightAccent);
    rootStyles.setProperty('background-image', this.isDaytime ? dayBg : nightBg);

    const bodyStyles = document.body.style;

    bodyStyles.setProperty('background-color', this.isDaytime ? dayOpaqueBg : nightOpaqueBg);
  }

  public firstUpdated(): void {
    if (localStorage.isMetric) {
      const storedMetric = localStorage.getItem('isMetric');

      this.isMetric = storedMetric ? (JSON.parse(storedMetric) as boolean) : true;
    }

    this.switchFormat(this.isMetric);

    const search = new URLSearchParams(globalThis.location.search).get('search');

    if (search) void this.apiCall(search);
    else
      LitMain.getCurrentPosition()
        .then((position: GeolocationPosition) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          return this.apiCall('', lat, lon);
        })
        .catch((error: unknown) => {
          if (error instanceof GeolocationPositionError)
            console.log(`${error.message} -> Setting a default location...`);

          return this.apiCall('Baku, Azerbaijan');
        });
  }

  public switchSystem(isMetric: boolean): void {
    localStorage.setItem('isMetric', JSON.stringify(isMetric));
    this.switchFormat(isMetric);
  }

  public switchFormat(isMetric: boolean): void {
    if (isMetric) {
      this.isMetric = isMetric;
      this.hourFormat = 'HH:mm';
      this.temperatureFormat = ' °C';
      this.speedFormat = ' m/s';
      this.distanceFormat = ' km';
      this.requestUpdate('isMetric', true);
    } else {
      this.isMetric = isMetric;
      this.hourFormat = 'hh:mm a';
      this.temperatureFormat = ' °F';
      this.speedFormat = ' mph';
      this.distanceFormat = ' mi';
      this.requestUpdate('isMetric', true);
    }
  }

  protected render(): TemplateResult {
    return renderMain(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lit-controls': LitControls;
    'lit-current': LitCurrent;
    'lit-footer': LitFooter;
    'lit-forecast': LitForecast;
    'lit-main': LitMain;
  }
}

const registerSW = (): void => {
  if ('serviceWorker' in globalThis)
    globalThis.addEventListener('load', () => {
      globalThis.navigator.serviceWorker
        .register('/weather-app/sw.js', {
          scope: '/weather-app/',
        })
        .catch((error: unknown) => {
          if (error instanceof Error) console.error(error);
        });
    });
};

registerSW();

// Easter Egg
console.log('Patrolling the Mojave almost makes you wish for a nuclear winter.');

export { LitMain };

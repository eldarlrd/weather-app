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

import { type TemplateResult, LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import '@/components/controls.ts';
import '@/components/current.ts';
import '@/components/forecast.ts';
import '@/components/footer.ts';
import { type LitControls } from '@/components/controls.ts';
import { type LitCurrent } from '@/components/current.ts';
import { type LitFooter } from '@/components/footer.ts';
import { type LitForecast } from '@/components/forecast.ts';

@customElement('lit-main')
class LitMain extends LitElement {
  protected render(): TemplateResult {
    return html`
      <lit-controls></lit-controls>
      <lit-current></lit-current>
      <lit-forecast></lit-forecast>
      <lit-footer></lit-footer>
    `;
  }

  static styles = css`
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

// Easter Egg
console.log(
  'Patrolling the Mojave almost makes you wish for a nuclear winter.'
);

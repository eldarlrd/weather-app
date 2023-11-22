import { type TemplateResult, LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { stylesheet } from '@/styles.ts';

@customElement('lit-forecast')
export class LitForecast extends LitElement {
  protected render(): TemplateResult {
    return html`
      ${stylesheet}
      <section></section>
    `;
  }

  static styles = css`
    ::selection {
      background-color: #0ea5e9;
    }
  `;
}

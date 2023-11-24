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

  public static styles = css`
    ::selection {
      background-color: var(--bg-primary);
    }
  `;
}

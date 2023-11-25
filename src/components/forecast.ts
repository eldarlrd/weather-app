import { type TemplateResult, LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { stylesheet } from '@/styles.ts';

@customElement('lit-forecast')
export class LitForecast extends LitElement {
  protected render(): TemplateResult {
    return html`
      ${stylesheet}
      <section class="w3-text-white w3-container w3-padding-24">
        <div>
          <slot></slot>
        </div>
      </section>
    `;
  }

  public static styles = css`
    :host {
      width: 100%;
    }

    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    section > div {
      display: grid;
      align-items: center;
      justify-content: center;
      grid-template-rows: repeat(5, 1fr);
      grid-template-columns: 1fr;
      width: fit-content;
      place-self: center;
      gap: 0.5rem;
    }
  `;
}

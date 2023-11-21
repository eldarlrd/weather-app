import { type TemplateResult, LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { stylesheet } from '@/styles.ts';

@customElement('lit-current')
export class LitCurrent extends LitElement {
  protected render(): TemplateResult {
    return html`
      ${stylesheet}
      <main class="w3-text-white w3-container">
        <h1 class="w3-xxlarge w3-center">Baku, Azerbaijan</h1>
      </main>
    `;
  }

  static styles = css`
    ::selection {
      background-color: #0ea5e9;
    }

    main > h1 {
      font-family: 'Signika', sans-serif;
      word-break: break-all;
    }
  `;
}

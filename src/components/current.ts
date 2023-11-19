import { type TemplateResult, LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { stylesheet } from '@/styles.ts';

@customElement('lit-current')
export class LitCurrent extends LitElement {
  protected render(): TemplateResult {
    return html`
      ${stylesheet}
      <main>Current</main>
    `;
  }

  static styles = css`
    ::selection {
      background-color: #0ea5e9;
    }
  `;
}

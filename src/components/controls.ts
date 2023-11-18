import { type TemplateResult, LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { stylesheet } from '@/styles.ts';

@customElement('lit-controls')
export class LitControls extends LitElement {
  render(): TemplateResult {
    return html`
      ${stylesheet}
      <header>Controls</header>
    `;
  }

  static styles = css``;
}

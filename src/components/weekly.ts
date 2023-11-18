import { type TemplateResult, LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { stylesheet } from '@/styles.ts';

@customElement('lit-weekly')
export class LitWeekly extends LitElement {
  render(): TemplateResult {
    return html` ${stylesheet}
      <section>Weekly</section>`;
  }

  static styles = css``;
}

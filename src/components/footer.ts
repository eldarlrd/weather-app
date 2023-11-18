import { type TemplateResult, LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { stylesheet } from '@/styles.ts';

@customElement('lit-footer')
export class LitFooter extends LitElement {
  render(): TemplateResult {
    return html` ${stylesheet}
      <footer>Footer</footer>`;
  }

  static styles = css``;
}

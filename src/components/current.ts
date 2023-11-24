import { type TemplateResult, LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { stylesheet } from '@/styles.ts';

@customElement('lit-current')
export class LitCurrent extends LitElement {
  protected render(): TemplateResult {
    return html`
      ${stylesheet}
      <main class="w3-text-white w3-container w3-padding-16">
        <slot></slot>
      </main>
    `;
  }

  public static styles = css`
    :host {
      width: 100%;
    }

    main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `;
}

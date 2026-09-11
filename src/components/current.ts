import { LitElement, type TemplateResult, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { stylesheet } from '@/styles.ts';

@customElement('lit-current')
export class LitCurrent extends LitElement {
  private readonly _stylesheet = stylesheet;

  protected render(): TemplateResult {
    return this.renderTemplate();
  }

  private readonly renderTemplate = (): TemplateResult => html`
      ${this._stylesheet}
      <main class="w3-text-white w3-container w3-padding-16">
        <slot></slot>
      </main>
    `;

  public static styles = css`
    :host {
      width: 100%;
    }

    main {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }
  `;
}

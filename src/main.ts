import { LitElement, type TemplateResult, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lit-main')
export class LitMain extends LitElement {
  @property({ type: Number })
  count = 0;

  render(): TemplateResult {
    return html`
      <div class="card">
        <button @click=${this._onClick} part="button">
          count is ${this.count}
        </button>
      </div>
    `;
  }

  private _onClick = (): void => {
    this.count++;
  };

  static styles = css``;
}

declare global {
  interface HTMLElementTagNameMap {
    'lit-main': LitMain;
  }
}

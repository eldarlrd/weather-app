import { type TemplateResult, LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

const stylesheet = html`<link
  rel="stylesheet"
  type="text/css"
  href="https://w3schools.com/w3css/4/w3.css" />`;

@customElement('lit-main')
export class LitMain extends LitElement {
  render(): TemplateResult {
    return html` ${stylesheet} `;
  }

  static styles = css``;
}

declare global {
  interface HTMLElementTagNameMap {
    'lit-main': LitMain;
  }
}

// Easter Egg
console.log(
  'Patrolling the Mojave almost makes you wish for a nuclear winter.'
);

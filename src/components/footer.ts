import { type TemplateResult, LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { stylesheet } from '@/styles.ts';

@customElement('lit-footer')
export class LitFooter extends LitElement {
  protected render(): TemplateResult {
    return html`
      ${stylesheet}
      <footer class="w3-text-white w3-large w3-padding-32">
        © 2023
        <a
          class="w3-round-large"
          title="Go to the Source"
          target="_blank"
          type="text/html"
          rel="noopener noreferrer nofollow external author"
          href="https://github.com/eldarlrd/weather-app">
          <i class="fa-brands fa-github"></i>
          eldarlrd
        </a>
      </footer>
    `;
  }

  static styles = css`
    ::selection {
      background-color: #0ea5e9;
    }

    :focus-visible {
      outline: 1px solid white;
    }

    :host {
      min-width: 100%;
      text-align: center;
      user-select: none;
      font-weight: 400;
    }

    a {
      text-decoration: none;
      border: 1px solid transparent;
      &:hover {
        border: 1px solid white;
      }
    }
  `;
}

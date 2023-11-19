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
      outline: 2px solid white;
    }

    :host {
      min-width: 100%;
      text-align: center;
      user-select: none;
      font-weight: 400;
    }

    footer > a {
      display: inline-block;
      border-radius: 2rem;
      text-decoration: none;
      margin-left: 0.25rem;
      transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
      &:hover {
        transform: scale(1.05);
      }
    }
  `;
}

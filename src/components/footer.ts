import { LitElement, type TemplateResult, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { stylesheet } from '@/styles.ts';

@customElement('lit-footer')
export class LitFooter extends LitElement {
  private readonly _stylesheet = stylesheet;

  protected render(): TemplateResult {
    return this.renderTemplate();
  }

  private readonly renderTemplate = (): TemplateResult => html`
      ${this._stylesheet}
      <footer class="w3-text-white w3-large w3-padding-32">
        © 2023 - 2026
        <a
          title="Source"
          target="_blank"
          type="text/html"
          rel="noreferrer external author"
          href="https://github.com/eldarlrd/weather-app">
          <i class="fa-brands fa-github"></i>
          eldarlrd
        </a>
      </footer>
    `;

  public static styles = css`
    :focus-visible {
      outline: 2px solid white;
    }

    :host {
      min-width: 100%;
      text-align: center;
      user-select: none;
      font-weight: 400;
    }

    footer {
      filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
        drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
    }

    footer > a {
      display: inline-block;
      border-radius: 2rem;
      text-decoration: none;
      margin-left: 0.25rem;
      transition: transform var(--transition);

      &:hover {
        transform: scale(1.05);
      }
    }
  `;
}

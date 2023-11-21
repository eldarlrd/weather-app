import { type TemplateResult, LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { stylesheet } from '@/styles.ts';

@customElement('lit-controls')
export class LitControls extends LitElement {
  protected render(): TemplateResult {
    return html`
      ${stylesheet}
      <header class="w3-text-white w3-padding-16">
        <img
          src="favicon.png"
          alt="A sun behind a cloud"
          width="128"
          height="128" />
        <span>
          <input
            title=""
            type="text"
            name="search"
            placeholder="Search"
            class="w3-text-white w3-padding" />
          <button type="button" title="Search" class="w3-text-white">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </span>
        <div>
          <button type="button" class="w3-text-white">°C, m/s</button>
          <button type="button" class="w3-text-white">°F, mph</button>
        </div>
      </header>
    `;
  }

  static styles = css`
    ::selection {
      background-color: var(--bg-primary);
    }

    header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-weight: 400;
      gap: 1rem;
      & span {
        display: flex;
        gap: 0.25rem;
        & input {
          border: 0;
          border-radius: 2rem 0 0 2rem;
          background-color: var(--bg-secondary);
          outline: 2px solid var(--bg-secondary);
          transition: outline-color var(--transition);
          &:hover,
          &:focus-visible {
            outline: 2px solid white !important;
          }
          &::placeholder {
            color: white;
            opacity: 0.5;
          }
        }
        & button {
          border: 0;
          user-select: none;
          border-radius: 0 2rem 2rem 0;
          padding: 0.5rem 0.75rem;
          background-color: var(--bg-accent);
          outline: 2px solid var(--bg-accent);
          transition: outline-color var(--transition);
          cursor: pointer;
          &:hover,
          &:focus-visible {
            outline: 2px solid white !important;
          }
        }
      }
      & div {
        display: flex;
        gap: 0.75rem;
        & button {
          border: 0;
          user-select: none;
          border-radius: 2rem;
          padding: 0.5rem 0.75rem;
          background-color: var(--bg-secondary);
          outline: 2px solid var(--bg-secondary);
          transition: outline-color var(--transition);
          cursor: pointer;
          &:hover,
          &:focus-visible {
            outline: 2px solid white !important;
          }
        }
      }
    }
  `;
}

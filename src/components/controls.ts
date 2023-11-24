import { type TemplateResult, LitElement, html, css, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

import { type LitMain } from '@/main.ts';
import { stylesheet } from '@/styles.ts';

/**
 * @prop apiCall
 * @prop switchSystem
 * @prop switchFormat
 * @prop isMetric
 */
@customElement('lit-controls')
export class LitControls extends LitElement {
  @property({ type: String })
  accessor locationData = '';

  @property({ type: Boolean })
  accessor isMetricActive = localStorage.isMetric === 'true' ? true : false;

  @query('input')
  _input!: HTMLInputElement;

  protected render(): TemplateResult {
    return html`
      ${stylesheet}
      <header class="w3-text-white w3-padding-16">
        <img
          src="favicon.png"
          alt="A sun behind a cloud"
          width="128"
          height="128" />

        <form method="get">
          <input
            title=""
            type="text"
            name="search"
            minlength="1"
            @input=${(e: Event): string =>
              (this.locationData = (e.target as HTMLInputElement).value)}
            value=${this.locationData}
            placeholder="Search"
            class="w3-text-white" />
          ${this.locationData
            ? html`<button
                id="clear"
                type="button"
                title="Clear"
                tabindex="-1"
                @click=${(): void => {
                  this.locationData = '';
                  this._input.value = '';
                }}
                class="w3-text-white">
                <i class="fa-solid fa-x"></i>
              </button>`
            : nothing}

          <button
            id="submit"
            type="submit"
            title="Search"
            @click=${(e: Event): Promise<void> | undefined => {
              e.preventDefault();
              if (this.locationData !== '')
                return (this as unknown as LitMain).apiCall(this.locationData);
            }}
            class="w3-text-white">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>

        <div>
          <button
            type="button"
            title="Metric system"
            class="w3-text-white ${this.isMetricActive ? 'active-btn' : ''}"
            @click=${(): void => {
              (this as unknown as LitMain).isMetric = true;
              this.isMetricActive = (this as unknown as LitMain).isMetric;
              (this as unknown as LitMain).switchSystem(
                (this as unknown as LitMain).isMetric
              );
            }}>
            °C, m/s
          </button>
          <button
            type="button"
            title="Imperial system"
            class="w3-text-white ${this.isMetricActive ? '' : 'active-btn'}"
            @click=${(): void => {
              (this as unknown as LitMain).isMetric = false;
              this.isMetricActive = (this as unknown as LitMain).isMetric;
              (this as unknown as LitMain).switchSystem(
                (this as unknown as LitMain).isMetric
              );
            }}>
            °F, mph
          </button>
        </div>
      </header>
    `;
  }

  public static styles = css`
    ::selection {
      background-color: var(--bg-primary);
    }

    header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-weight: 400;
      margin-top: 0.25rem;
      gap: 1rem;

      & form {
        display: flex;
        gap: 0.25rem;
        border-radius: 2rem;

        &:hover #clear,
        &:focus-within #clear {
          visibility: visible;
        }

        & input {
          border: 0;
          border-radius: 2rem 0 0 2rem;
          background-color: var(--bg-secondary);
          outline: 2px solid var(--bg-secondary);
          transition: outline-color var(--transition);
          padding: 0.5rem 2rem 0.5rem 1rem;

          &:hover,
          &:focus-visible {
            outline: 2px solid white !important;
          }

          &::placeholder {
            color: white;
            opacity: 0.5;
          }
        }

        & #clear {
          visibility: hidden;
          position: relative;
          border: 0;
          user-select: none;
          border-radius: 2rem;
          padding: 0.25rem;
          background-color: transparent;
          outline: none;
          cursor: pointer;
          margin-left: -1.5rem;
          right: 6px;
        }

        & #submit {
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
        }

        .active-btn {
          outline: 2px solid white !important;
        }
      }
    }
  `;
}

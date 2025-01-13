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
  private locationData = '';
  @property({ type: String })
  accessor prevLocationData!: string;

  @property({ type: Boolean })
  accessor isMetricActive = localStorage.isMetric === 'false' ? false : true;

  @query('input')
  private _input!: HTMLInputElement;

  protected render(): TemplateResult {
    return html`
      ${stylesheet}
      <header class="w3-text-white w3-padding-16">
        <slot></slot>
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
                if (this.locationData !== this.prevLocationData) {
                  this.prevLocationData = this.locationData;

                  return (this as unknown as LitMain).apiCall(
                    this.locationData
                  );
                }
            }}
            class="w3-text-white">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>

        <div>
          <button
            type="button"
            title="Metric"
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
            title="Imperial"
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
      gap: 1rem;
      display: flex;
      font-weight: 400;
      align-items: center;
      margin-top: 0.25rem;
      flex-direction: column;
      justify-content: flex-start;

      & form {
        gap: 0.25rem;
        display: flex;
        border-radius: 2rem;

        & i {
          filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
            drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
        }

        &:hover #clear,
        &:focus-within #clear {
          visibility: visible;
        }

        & input {
          border: 0;
          outline-offset: -1px;
          border-radius: 2rem 0 0 2rem;
          padding: 0.5rem 2rem 0.5rem 1rem;
          background-color: var(--bg-secondary);
          outline: 2px solid var(--bg-secondary);
          transition: outline-color var(--transition);
          box-shadow:
            0 1px 3px 0 rgb(0 0 0 / 0.1),
            0 1px 2px -1px rgb(0 0 0 / 0.1);

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
          border: 0;
          right: 6px;
          outline: none;
          cursor: pointer;
          padding: 0.25rem;
          user-select: none;
          visibility: hidden;
          position: relative;
          border-radius: 2rem;
          margin-left: -1.5rem;
          background-color: transparent;
          -webkit-tap-highlight-color: transparent;
        }

        & #submit {
          border: 0;
          cursor: pointer;
          margin-left: -2px;
          user-select: none;
          outline-offset: -1px;
          padding: 0.5rem 0.75rem;
          border-radius: 0 2rem 2rem 0;
          background-color: var(--bg-accent);
          outline: 2px solid var(--bg-accent);
          -webkit-tap-highlight-color: transparent;
          transition: outline-color var(--transition);
          box-shadow:
            0 1px 3px 0 rgb(0 0 0 / 0.1),
            0 1px 2px -1px rgb(0 0 0 / 0.1);

          &:hover,
          &:focus-visible {
            outline: 2px solid white !important;
          }
        }
      }

      & div {
        gap: 0.75rem;
        display: flex;

        & button {
          border: 0;
          user-select: none;
          border-radius: 2rem;
          outline-offset: -1px;
          padding: 0.5rem 0.75rem;
          background-color: var(--bg-secondary);
          outline: 2px solid var(--bg-secondary);
          -webkit-tap-highlight-color: transparent;
          transition: outline-color var(--transition);
          cursor: pointer;
          box-shadow:
            0 1px 3px 0 rgb(0 0 0 / 0.1),
            0 1px 2px -1px rgb(0 0 0 / 0.1);

          &:hover,
          &:focus-visible {
            outline: 2px solid white !important;
          }
        }

        .active-btn {
          outline: 2px solid white !important;
        }
      }
    }
  `;
}

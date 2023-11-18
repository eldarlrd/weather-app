import { type TemplateResult, LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import '@/components/controls.ts';
import '@/components/current.ts';
import '@/components/weekly.ts';
import '@/components/footer.ts';
import { type LitControls } from '@/components/controls.ts';
import { type LitCurrent } from '@/components/current.ts';
import { type LitFooter } from '@/components/footer.ts';
import { type LitWeekly } from '@/components/weekly.ts';

@customElement('lit-main')
class LitMain extends LitElement {
  render(): TemplateResult {
    return html`
      <lit-controls></lit-controls>
      <lit-current></lit-current>
      <lit-weekly></lit-weekly>
      <lit-footer></lit-footer>
    `;
  }

  static styles = css``;
}

declare global {
  interface HTMLElementTagNameMap {
    'lit-main': LitMain;
    'lit-controls': LitControls;
    'lit-current': LitCurrent;
    'lit-weekly': LitWeekly;
    'lit-footer': LitFooter;
  }
}

// Easter Egg
console.log(
  'Patrolling the Mojave almost makes you wish for a nuclear winter.'
);

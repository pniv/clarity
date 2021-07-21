/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/button-split/register.js';
import { baseStyles, customElement, state } from '@cds/core/internal';
import { css, html, LitElement } from 'lit';

export default {
  title: 'Stories/Button Split',
  component: 'cds-button-split',
  parameters: {
    options: { showPanel: true },
  },
};

export function basic() {
  return html` <div cds-layout="horizontal gap:xl m-b:lg">
    <cds-button-split>
      <input type="range" aria-label="resize card divider" />
    </cds-button-split>
    <cds-button-split direction="horizontal">
      <input type="range" aria-label="resize card divider" />
    </cds-button-split>
  </div>`;
}

export function buttonSplitPanel() {
  @customElement('demo-button-split')
  class DemoButtonSplit extends LitElement {
    @state() width = 40;
    @state() height = 40;

    static styles = [
      baseStyles,
      css`
        section {
          display: grid;
          height: 100%;
          overflow: hidden;
          margin-bottom: 24px;
        }

        cds-card {
          --padding: 0;
          --width: 200px;
          --height: 200px;
        }

        [side='one'],
        [side='two'] {
          min-width: 20px;
          flex: 1;
          display: block;
        }

        [side='two'] {
          background: var(--cds-alias-object-container-background-tint);
        }
      `,
    ];

    render() {
      return html`
        <div cds-layout="horizontal gap:lg">
          <cds-card>
            <section style="grid-template-columns: ${this.width}px 2px 1fr">
              <div side="one"></div>
              <cds-button-split>
                <input
                  type="range"
                  aria-label="resize card divider"
                  value=${this.width}
                  min="20"
                  max="180"
                  step="20"
                  @input=${(e: any) => (this.width = e.target.value)}
                />
              </cds-button-split>
              <div side="two"></div>
            </section>
          </cds-card>
          <cds-card>
            <section style="grid-template-rows: ${this.height}px 2px 1fr">
              <div side="one"></div>
              <cds-button-split direction="horizontal">
                <input
                  type="range"
                  aria-label="resize card divider"
                  value=${this.height}
                  min="20"
                  max="180"
                  step="20"
                  @input=${(e: any) => (this.height = e.target.value)}
                />
              </cds-button-split>
              <div side="two"></div>
            </section>
          </cds-card>
        </div>
      `;
    }
  }
  return html`<demo-button-split></demo-button-split>`;
}

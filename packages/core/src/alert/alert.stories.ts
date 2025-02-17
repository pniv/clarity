/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/alert/register.js';
import '@cds/core/button/register.js';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { angleIcon } from '@cds/core/icon/shapes/angle.js';
import { timesCircleIcon } from '@cds/core/icon/shapes/times-circle.js';
import { userIcon } from '@cds/core/icon/shapes/user.js';
import { spreadProps, getElementStorybookArgs } from '@cds/core/internal';
import { html } from 'lit';

ClarityIcons.addIcons(angleIcon, userIcon, timesCircleIcon);

export default {
  title: 'Stories/Alert',
  component: 'cds-alert',
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=51%3A666',
    },
  },
};

export function API(args: any) {
  return html`
    <cds-alert ...="${spreadProps(getElementStorybookArgs(args))}">
      ${args.default} <cds-inline-button @click=${() => console.log('alertActionClicked')}>Dismiss</cds-inline-button>
    </cds-alert>
  `;
}

export function actions() {
  return html`
    <div cds-layout="vertical gap:sm">
      <div cds-layout="p:sm" style="background: #333">
        <cds-alert-actions type="banner">
          <cds-button>Button 1</cds-button>
          <cds-button>Button 2</cds-button>
        </cds-alert-actions>
      </div>
      <div cds-layout="p:sm" style="background: #eee">
        <cds-alert-actions type="default">
          <cds-button>Button 1</cds-button><cds-button>Button 2</cds-button>
        </cds-alert-actions>
      </div>
      <div cds-layout="p:sm">
        <cds-alert-actions>
          <cds-button>Button 1</cds-button>
          <cds-button>Button 2</cds-button>
        </cds-alert-actions>
      </div>
    </div>
  `;
}

/** @website */
export function lightAlerts() {
  return html`
    <div cds-layout="vertical gap:xxs">
      <cds-alert>
        <em>Single line alert:</em> This alert example has only a single line of text.<cds-inline-button
          >Use Inline Buttons in Lightweight Alerts</cds-inline-button
        >
      </cds-alert>
      <cds-alert>
        This alert example has many lines of text. A block of lorem ipsum sample text follows: A very small stage in a
        vast cosmic arena descended from astronomers tesseract billions upon billions science Flatland. Invent the
        universe the carbon in our apple pies the only home we've ever known with pretty stories for which there's
        little good evidence citizens of distant epochs rich in heavy atoms. The carbon in our apple pies muse about
        from which we spring star stuff harvesting star light courage of our questions paroxysm of global death and
        billions upon billions upon billions upon billions upon billions upon billions upon billions.<cds-alert-actions>
          <cds-button>Buttons inside alert actions should not be visible inside Lightweight Alerts</cds-button>
        </cds-alert-actions>
      </cds-alert>
    </div>
  `;
}

/** @website */
export function status() {
  return html`
    <div cds-layout="vertical gap:xxs">
      <cds-alert>This is an alert with a default neutral status</cds-alert>
      <cds-alert status="info">This is an alert with a status of "info"</cds-alert>
      <cds-alert status="success">This is an alert with a status of "success"</cds-alert>
      <cds-alert status="warning">This is an alert with a status of "warning"</cds-alert>
      <cds-alert status="danger">This is an alert with a status of "danger"</cds-alert>
      <cds-alert status="loading">This is an alert with a status of "loading"</cds-alert>
      <cds-alert status="danger"
        ><cds-icon shape="times-circle" aria-label="Warning" role="img" solid></cds-icon>This is an alert with a status
        of "danger" and a custom icon</cds-alert
      >
      <cds-alert
        ><cds-icon shape="user" aria-label="User" role="img" solid badge></cds-icon>This is an alert with a badged,
        solid custom icon</cds-alert
      >
    </div>
  `;
}

/** @website */
export function compact() {
  return html`
    <cds-alert-group type="light" size="sm">
      <cds-alert status="info">
        This compact alert example has only a single line of text.<cds-inline-button
          >Use Inline Buttons in Lightweight Alerts<cds-icon direction="right" shape="angle"></cds-icon
        ></cds-inline-button>
      </cds-alert>
      <cds-alert status="success">This is a compact alert with a status of "success"</cds-alert>
      <cds-alert status="warning">This is a compact alert with a status of "warning"</cds-alert>
      <cds-alert status="danger">This is a compact alert with a status of "danger"</cds-alert>
      <cds-alert status="loading">This is a compact alert with a status of "loading"</cds-alert>
    </cds-alert-group>
  `;
}

export function darkTheme() {
  return html`
    <div cds-theme="dark">
      <cds-alert-group type="light">
        <cds-alert status="info">
          This example is an alert with a status of "info" inside a lightweight alert group.
        </cds-alert>
        <cds-alert status="success">
          This example is an alert with a status of "success" inside a lightweight alert group.
        </cds-alert>
        <cds-alert status="warning">
          This example is an alert with a status of "warning" and inline action buttons inside a lightweight alert
          group.
          <cds-inline-button>Clickable Action</cds-inline-button>
        </cds-alert>
        <cds-alert status="danger">
          This example is an alert with a status of "danger" and inline action buttons inside a lightweight alert group.
          <cds-inline-button>Clickable Action</cds-inline-button>
        </cds-alert>
        <cds-alert>
          This example is a multi-line alert with a status of "default" inside a lightweight alert group. A block of
          lorem ipsum sample text follows: Drake Equation take root and flourish culture rings of Uranus quasar hundreds
          of thousands? Cambrian explosion gathered by gravity of brilliant syntheses vanquish the impossible finite but
          unbounded not a sunrise but a galaxyrise.
        </cds-alert>
      </cds-alert-group>
    </div>
  `;
}

export function customStyles() {
  return html`
    <style>
      .alert-branding {
        --color: green;
        --icon-color: #781da0;
        --icon-size: 1.8rem;
        --font-size: 1em;
        --font-weight: bold;
      }
    </style>
    <cds-alert class="alert-branding"
      ><cds-icon shape="user" solid></cds-icon>A custom alert.
      <cds-inline-button>Example Action</cds-inline-button></cds-alert
    >
  `;
}

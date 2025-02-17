/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { spreadProps, getElementStorybookArgs } from '@cds/core/internal';
import { html } from 'lit';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { headphonesIcon } from '@cds/core/icon/shapes/headphones.js';
import { nodeGroupIcon } from '@cds/core/icon/shapes/node-group.js';
import { timesCircleIcon } from '@cds/core/icon/shapes/times-circle.js';

ClarityIcons.addIcons(headphonesIcon, nodeGroupIcon, timesCircleIcon);

export default {
  title: 'Stories/Alert Group',
  component: 'cds-alert-group',
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ZvaQGGktjGoW6gz9DqwvrLtz/Clarity-UI-Library---light?node-id=51%3A666',
    },
  },
};

export function API(args: any) {
  return html`
    <cds-alert-group ...="${spreadProps(getElementStorybookArgs(args))}">
      <cds-alert closable @closeChange=${() => console.log('closeChange')}>
        ${args.default}
        <cds-alert-actions>
          <cds-button>Button 1</cds-button>
          <cds-button>Button 2</cds-button>
        </cds-alert-actions>
      </cds-alert>
    </cds-alert-group>
  `;
}

/** @website */
export function alertGroup() {
  return html`
    <div cds-layout="vertical gap:sm">
      <cds-alert-group status="info" aria-label="This is an example info alert group">
        <cds-alert closable aria-label="This is an example info alert group">
          This example is a closable alert inside an alert group with a status of "info".
        </cds-alert>
        <cds-alert closable cds-i18n='{ "closeButtonAriaLabel": "close alert with a custom icon"}'>
          <cds-icon shape="node-group" aria-label="Custom icon of a node group" role="img"></cds-icon>
          This example is an alert a user may be able to close with a custom icon shape inside an alert group with a
          status of "info".
        </cds-alert>
        <cds-alert status="loading" closable cds-i18n='{ "closeButtonAriaLabel": "close alert with a loading status"}'>
          This example is an alert with a "loading" status and alert action buttons inside an alert group with a status
          of "info".
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <a href="#" cds-text="link">Link 1</a>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group status="success" aria-label="This is an example success alert group">
        <cds-alert closable cds-i18n='{ "closeButtonAriaLabel": "close success alert"}'>
          This example is an alert a user may be able to close inside an alert group with a status of "success".
        </cds-alert>
        <cds-alert closable cds-i18n='{ "closeButtonAriaLabel": "close success alert with action buttons"}'>
          This example is an alert a user may be able to close with alert action buttons inside an alert group with a
          status of "success".
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <a href="#" cds-text="link">Link 1</a>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group status="warning" aria-label="This is an example warning alert group">
        <cds-alert closable cds-i18n='{ "closeButtonAriaLabel": "close warning alert"}'>
          This example is an alert a user may be able to close inside an alert group with a status of "warning".
        </cds-alert>
        <cds-alert closable cds-i18n='{ "closeButtonAriaLabel": "close warning alert with action buttons"}'>
          This example is an alert a user may be able to close with alert action buttons inside an alert group with a
          status of "warning".
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <a href="#" cds-text="link">Link 1</a>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group status="danger" aria-label="This is an example error or danger alert group">
        <cds-alert closable cds-i18n='{ "closeButtonAriaLabel": "close danger alert"}'>
          This example is an alert a user may be able to close inside an alert group with a status of "danger".
        </cds-alert>
        <cds-alert closable cds-i18n='{ "closeButtonAriaLabel": "close danger alert with action buttons"}'>
          This example is an alert a user may be able to close with alert action buttons inside an alert group with a
          status of "danger".
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <a href="#" cds-text="link">Link 1</a>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>
      <cds-alert-group status="neutral" aria-label="This is an example neutral alert group">
        <cds-alert closable cds-i18n='{ "closeButtonAriaLabel": "close neutral alert"}'>
          This example is an alert a user may be able to close inside an alert group with a status of "neutral".
        </cds-alert>
        <cds-alert closable cds-i18n='{ "closeButtonAriaLabel": "close neutral alert with action buttons"}'>
          This example is an alert a user may be able to close with alert action buttons inside an alert group with a
          status of "neutral".
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <a href="#" cds-text="link">Link 1</a>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>
    </div>
  `;
}

export const compactStandardAlertGroup = () => {
  return html`
    <div cds-layout="vertical gap:sm">
      <cds-alert-group size="sm" status="info" aria-label="This is an example info alert group">
        <cds-alert
          closable
          aria-label="This is an example info alert group"
          cds-i18n='{ "closeButtonAriaLabel": "close compact info alert"}'
        >
          This example is a closable alert inside an alert group with a status of "info".
        </cds-alert>
        <cds-alert closable cds-i18n='{ "closeButtonAriaLabel": "close compact info alert with a custom icon"}'>
          <cds-icon shape="node-group" aria-label="Custom icon of a node group" role="img"></cds-icon>
          This example is an alert a user may be able to close with a custom icon shape inside an alert group with a
          status of "info".
        </cds-alert>
        <cds-alert
          status="loading"
          closable
          cds-i18n='{ "closeButtonAriaLabel": "close compact info alert with a loading status"}'
        >
          This example is an alert with a "loading" status and alert action buttons inside an alert group with a status
          of "info".
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <a href="#" cds-text="link">Link 1</a>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group size="sm" status="success" aria-label="This is an example success alert group">
        <cds-alert closable cds-i18n='{ "closeButtonAriaLabel": "close compact success alert"}'>
          This example is an alert a user may be able to close inside an alert group with a status of "success".
        </cds-alert>
        <cds-alert closable cds-i18n='{ "closeButtonAriaLabel": "close compact success alert with action buttons"}'>
          This example is an alert a user may be able to close with alert action buttons inside an alert group with a
          status of "success".
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <a href="#" cds-text="link">Link 1</a>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group size="sm" status="warning" aria-label="This is an example warning alert group">
        <cds-alert closable cds-i18n='{ "closeButtonAriaLabel": "close compact warning alert"}'>
          This example is an alert a user may be able to close inside an alert group with a status of "warning".
        </cds-alert>
        <cds-alert closable cds-i18n='{ "closeButtonAriaLabel": "close compact warning alert with action buttons"}'>
          This example is an alert a user may be able to close with alert action buttons inside an alert group with a
          status of "warning".
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <a href="#" cds-text="link">Link 1</a>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group size="sm" status="danger" aria-label="This is an example error or danger alert group">
        <cds-alert closable cds-i18n='{ "closeButtonAriaLabel": "close compact danger alert"}'>
          This example is an alert a user may be able to close inside an alert group with a status of "danger".
        </cds-alert>
        <cds-alert closable cds-i18n='{ "closeButtonAriaLabel": "close compact danger alert with action buttons"}'>
          This example is an alert a user may be able to close with alert action buttons inside an alert group with a
          status of "danger".
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <a href="#" cds-text="link">Link 1</a>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group size="sm" status="neutral" aria-label="This is an example neutral alert group">
        <cds-alert closable cds-i18n='{ "closeButtonAriaLabel": "close compact neutral alert"}'>
          This example is an alert a user may be able to close inside an alert group with a status of "neutral".
        </cds-alert>
        <cds-alert closable cds-i18n='{ "closeButtonAriaLabel": "close compact neutral alert with action buttons"}'>
          This example is an alert a user may be able to close with alert action buttons inside an alert group with a
          status of "neutral".
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <a href="#" cds-text="link">Link 1</a>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>
    </div>
  `;
};

export const darkThemeStandardAlertGroup = () => {
  return html`
    <div cds-theme="dark" cds-layout="vertical gap:sm">
      <cds-alert-group status="info">
        <cds-alert closable cds-i18n='{ "closeButtonAriaLabel": "close dark theme info alert"}'>
          This example is a closable alert inside an alert group with a status of "info".
        </cds-alert>
        <cds-alert closable cds-i18n='{ "closeButtonAriaLabel": "close dark theme info alert with a custom icon"}'>
          <cds-icon shape="node-group" aria-hidden="true"></cds-icon>
          This example is a closable alert with a custom icon shape inside an alert group with a status of "info".
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <a href="#" cds-text="link">Link 1</a>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group status="success">
        <cds-alert closable cds-i18n='{ "closeButtonAriaLabel": "close dark theme success alert"}'>
          This example is a closable alert inside an alert group with a status of "success".
        </cds-alert>
        <cds-alert closable cds-i18n='{ "closeButtonAriaLabel": "close dark theme success alert with action buttons"}'>
          This example is a closable alert with alert action buttons inside an alert group with a status of "success".
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <a href="#" cds-text="link">Link 1</a>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group status="warning">
        <cds-alert closable cds-i18n='{ "closeButtonAriaLabel": "close dark theme warning alert"}'>
          This example is a closable alert inside an alert group with a status of "warning".
        </cds-alert>
        <cds-alert closable cds-i18n='{ "closeButtonAriaLabel": "close dark theme warning alert with action buttons"}'>
          This example is a closable alert with alert action buttons inside an alert group with a status of "warning".
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <a href="#" cds-text="link">Link 1</a>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group status="danger">
        <cds-alert closable cds-i18n='{ "closeButtonAriaLabel": "close dark theme danger alert"}'>
          This example is a closable alert inside an alert group with a status of "danger".
        </cds-alert>
        <cds-alert closable cds-i18n='{ "closeButtonAriaLabel": "close dark theme danger alert with action buttons"}'>
          This example is a closable alert with alert action buttons inside an alert group with a status of "danger".
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <a href="#" cds-text="link">Link 1</a>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group status="neutral" aria-label="This is an example neutral alert group">
        <cds-alert closable cds-i18n='{ "closeButtonAriaLabel": "close dark theme neutral alert"}'>
          This example is an alert a user may be able to close inside an alert group with a status of "neutral".
        </cds-alert>
        <cds-alert closable cds-i18n='{ "closeButtonAriaLabel": "close dark theme neutral alert with action buttons"}'>
          This example is an alert a user may be able to close with alert action buttons inside an alert group with a
          status of "neutral".
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <a href="#" cds-text="link">Link 1</a>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>
    </div>
  `;
};

/** @website */
export function bannerGroupStatus() {
  return html`
    <div cds-layout="vertical gap:sm">
      <cds-alert-group
        type="banner"
        status="info"
        aria-label="This is an example banner alert group with a status of info"
      >
        <cds-alert closable>
          This example is a banner alert a user may be able to close inside a banner alert group with a status of
          "info".
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group
        type="banner"
        status="success"
        aria-label="This is an example banner alert group with a status of success"
      >
        <cds-alert closable>
          This example is an alert a user may be able to close with a status of "success" inside a banner alert group.
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group
        type="banner"
        status="warning"
        aria-label="This is an example banner alert group with a status of warning"
      >
        <cds-alert closable>
          This example is an alert a user may be able to close with alert action buttons and a status of "warning"
          inside a banner alert group.
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <a href="#">
              <cds-button>Link 1</cds-button>
            </a>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group
        type="banner"
        status="danger"
        aria-label="This is an example banner alert group with a status of danger or error"
      >
        <cds-alert closable>
          This example is an alert a user may be able to close with a status of "danger" inside a banner alert group.
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <a href="#">
              <cds-button>Link 1</cds-button>
            </a>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group
        type="banner"
        status="neutral"
        aria-label="This is an example banner alert group with a status of neutral"
      >
        <cds-alert closable>
          This example is an alert a user may be able to close with a status of "neutral" inside a banner alert group.
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <a href="#">
              <cds-button>Link 1</cds-button>
            </a>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group
        type="banner"
        status="info"
        aria-label="This is an example banner alert group with a status of info and a loading alert within it"
      >
        <cds-alert status="loading">
          This example is an alert with alert actions and a status of "loading" inside a banner alert group.
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>
    </div>
  `;
}

/** @website */
export function bannerGroup() {
  return html`
    <div cds-layout="vertical gap:sm">
      <cds-alert-group type="banner" aria-label="This is an example banner alert group">
        <cds-alert closable>
          <cds-icon shape="node-group" aria-label="Custom icon of a node group" role="img"></cds-icon>
          This example is an alert a user may be able to close with a custom icon shape inside a banner alert group.
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group
        type="banner"
        aria-label="This is an example banner alert group with an alert whose text is really long"
      >
        <cds-alert closable>
          <cds-icon shape="headphones" aria-label="Headphones" role="img"></cds-icon>
          This example is an alert a user may be able to close with alert action buttons, a custom icon, and multiple
          lines of text inside a banner alert group. A block of lorem ipsum sample text follows: Drake Equation take
          root and flourish culture rings of Uranus quasar hundreds of thousands? Cambrian explosion gathered by gravity
          of brilliant syntheses vanquish the impossible finite but unbounded not a sunrise but a galaxyrise.
          Intelligent beings two ghostly white figures in coveralls and helmets are soflty dancing something incredible
          is waiting to be known vanquish the impossible vastness is bearable only through love concept of the number
          one and billions upon billions upon billions upon billions upon billions upon billions upon billions.
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <a href="#" cds-text="link">Link 1</a>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group size="sm" type="banner" aria-label="This is an example banner alert group">
        <cds-alert>
          This example shows that a banner alert group should ignore compact sizing.
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>
    </div>
  `;
}

export const darkThemeBannerAlertGroup = () => {
  return html`
    <div cds-theme="dark" cds-layout="vertical gap:sm">
      <cds-alert-group type="banner" status="info">
        <cds-alert closable>
          This example is a closable banner alert inside a banner alert group with a status of "info".
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group type="banner" status="success">
        <cds-alert closable>
          This example is a closable alert with a status of "success" inside a banner alert group.
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group type="banner" status="warning">
        <cds-alert closable>
          This example is a closable alert with alert action buttons and a status of "warning" inside a banner alert
          group.
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <a href="#">
              <cds-button>Link 1</cds-button>
            </a>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group type="banner" status="danger">
        <cds-alert closable>
          This example is a closable alert with a status of "danger" inside a banner alert group.
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <a href="#">
              <cds-button>Link 1</cds-button>
            </a>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group type="banner" status="neutral">
        <cds-alert closable>
          This example is a closable alert with a status of "neutral" inside a banner alert group.
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <a href="#">
              <cds-button>Link 1</cds-button>
            </a>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>
    </div>
  `;
};

export const legacyWarningAlertBanner = () => {
  return html`
    <style>
      cds-alert-group[status='warning'][legacy] {
        --background: hsl(26deg 100% 38%);
      }

      cds-alert-group[status='warning'][legacy] cds-alert {
        --color: var(--cds-global-color-gray-0);
      }
    </style>

    <cds-alert-group
      type="banner"
      status="warning"
      aria-label="This is an example banner alert group with a status of warning"
      legacy
    >
      <cds-alert closable>
        This example is an alert a user may be able to close with alert action buttons and a status of "warning" inside
        a banner alert group.
        <cds-alert-actions>
          <cds-button>Button 1</cds-button>
          <a href="#">
            <cds-button>Link 1</cds-button>
          </a>
        </cds-alert-actions>
      </cds-alert>
    </cds-alert-group>
  `;
};

/*
export const bannerGroupWithPager = () => {
  return html`
    <div cds-layout="vertical gap:sm">
      <cds-alert-group type="banner">
        <div class="pager">Pager Here</div>
        <cds-alert closable status="info">
          This example banner alert group with a pager.
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group type="banner">
        <div class="pager">Pager Here</div>
        <cds-alert closable status="success">
          This example banner alert group with a pager.
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group type="banner">
        <div class="pager">Pager Here</div>
        <cds-alert closable status="warning">
          This example banner alert group with a pager.
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group type="banner">
        <div class="pager">Pager Here</div>
        <cds-alert closable status="danger">
          This example banner alert group with a pager.
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group type="banner">
        <div class="pager">Pager Here</div>
        <cds-alert closable status="alt">
          This example banner alert group with a pager.
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>
    </div>
  `;
};
*/

/** @website */
export function lightweightAlertGroup() {
  return html`
    <cds-alert-group type="light">
      <cds-alert status="info">
        This example is an alert with a status of "info" inside a lightweight alert group.
      </cds-alert>
      <cds-alert status="success">
        This example is an alert with a status of "success" and inline action buttons inside a lightweight alert group.
        <cds-inline-button>Clickable Action</cds-inline-button>
      </cds-alert>
      <cds-alert status="warning">
        This example is an alert with a status of "warning" and inline action buttons inside a lightweight alert group.
        <cds-inline-button>Clickable Action</cds-inline-button>
      </cds-alert>
      <cds-alert status="danger">
        This example is an alert with a status of "danger" and inline action buttons inside a lightweight alert group.
        <cds-inline-button>Clickable Action</cds-inline-button>
      </cds-alert>
      <cds-alert status="loading">
        This example is an alert with a status of "loading" inside a lightweight alert group.
        <cds-alert-actions>
          <cds-button>Alert actions should not be viewable in lightweight alerts</cds-button>
          <cds-button>Alert actions should not be viewable in lightweight alerts</cds-button>
        </cds-alert-actions>
      </cds-alert>
    </cds-alert-group>
  `;
}

/** @website */
export function compactAlertGroup() {
  return html`
    <div cds-layout="vertical gap:sm">
      <cds-alert-group status="info" size="sm">
        <cds-alert closable>
          This example is a closable alert inside a compact alert group with a status of "info".
        </cds-alert>
        <cds-alert closable>
          <cds-icon shape="node-group" aria-label="Custom icon of a node group" role="img"></cds-icon>
          This example is a closable alert with alert actions and a custom icon shape inside a compact alert group with
          a status of "info".
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <a href="#" cds-text="link">Link 1</a>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group status="success" size="sm">
        <cds-alert closable>
          This example is a closable alert inside a compact alert group with a status of "success".
        </cds-alert>
        <cds-alert closable>
          This example is a closable alert with alert actions and a custom icon shape inside a compact alert group with
          a status of "success".
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <a href="#" cds-text="link">Link 1</a>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group status="warning" size="sm">
        <cds-alert closable>
          This example is a closable alert inside a compact alert group with a status of "warning".
        </cds-alert>
        <cds-alert closable>
          <cds-icon shape="headphones" aria-label="Headphones" role="img"></cds-icon>
          This example is a closable alert with alert actions and a custom icon shape inside a compact alert group with
          a status of "warning".
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <a href="#" cds-text="link">Link 1</a>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>

      <cds-alert-group status="danger" size="sm">
        <cds-alert status="loading" closable>
          This example is a closable alert with a status of "loading" inside a compact alert group with a status of
          "danger".
        </cds-alert>
        <cds-alert closable>
          This example is a closable alert with alert actions inside a compact alert group with a status of "warning".
          <cds-alert-actions>
            <cds-button>Button 1</cds-button>
            <a href="#" cds-text="link">Link 1</a>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>
      <cds-alert-group type="light" size="sm">
        <cds-alert status="info">
          This example is an alert with a status of "info" inside a compact, lightweight alert group.
        </cds-alert>
        <cds-alert status="success">
          This example is an alert with a status of "success" inside a compact, lightweight alert group.
        </cds-alert>
        <cds-alert status="warning">
          This example is an alert with a status of "warning" inside a compact, lightweight alert group.
        </cds-alert>
        <cds-alert status="danger">
          This example is an alert with a status of "danger" and an inline action inside a compact, lightweight alert
          group.<cds-inline-button>Clickable Action</cds-inline-button>
        </cds-alert>
        <cds-alert status="loading">
          This example is an alert with a status of "loading" inside a compact, lightweight alert group.
          <cds-alert-actions>
            <cds-button>Alert actions should not be viewable in lightweight alerts</cds-button>
            <cds-button>Alert actions should not be viewable in lightweight alerts</cds-button>
          </cds-alert-actions>
        </cds-alert>
        <cds-alert status="neutral">
          This example is a multi-line alert with a status of "default" and two inline actions inside a compact,
          lightweight alert group. A block of lorem ipsum sample text follows: Drake Equation take root and flourish
          culture rings of Uranus quasar hundreds of thousands? Cambrian explosion gathered by gravity of brilliant
          syntheses vanquish the impossible finite but unbounded not a sunrise but a galaxyrise. Intelligent beings two
          ghostly white figures in coveralls and helmets are soflty dancing something incredible is waiting to be known
          vanquish the impossible vastness is bearable only through love concept of the number one and billions upon
          billions upon billions upon billions upon billions upon billions upon billions.<cds-inline-button
            >Clickable Action 1</cds-inline-button
          ><cds-inline-button>Clickable Action 2</cds-inline-button>
          <cds-alert-actions>
            <cds-button>Alert actions should not be viewable in lightweight alerts</cds-button>
          </cds-alert-actions>
        </cds-alert>
      </cds-alert-group>
    </div>
  `;
}

export function darkTheme() {
  return html`
    <div cds-layout="vertical gap:lg" cds-theme="dark">
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

      <div cds-layout="vertical gap:sm">
        <cds-alert-group status="info">
          <cds-alert closable>
            This example is a closable alert inside an alert group with a status of "info".
          </cds-alert>
          <cds-alert closable>
            <cds-icon shape="node-group" aria-hidden="true"></cds-icon>
            This example is a closable alert with a custom icon shape inside an alert group with a status of "info".
            <cds-alert-actions>
              <cds-button>Button 1</cds-button>
              <a href="#" cds-text="link">Link 1</a>
            </cds-alert-actions>
          </cds-alert>
        </cds-alert-group>

        <cds-alert-group status="success">
          <cds-alert closable>
            This example is a closable alert inside an alert group with a status of "success".
          </cds-alert>
          <cds-alert closable>
            This example is a closable alert with alert action buttons inside an alert group with a status of "success".
            <cds-alert-actions>
              <cds-button>Button 1</cds-button>
              <a href="#" cds-text="link">Link 1</a>
            </cds-alert-actions>
          </cds-alert>
        </cds-alert-group>

        <cds-alert-group status="warning">
          <cds-alert closable>
            This example is a closable alert inside an alert group with a status of "warning".
          </cds-alert>
          <cds-alert closable>
            This example is a closable alert with alert action buttons inside an alert group with a status of "warning".
            <cds-alert-actions>
              <cds-button>Button 1</cds-button>
              <a href="#" cds-text="link">Link 1</a>
            </cds-alert-actions>
          </cds-alert>
        </cds-alert-group>

        <cds-alert-group status="danger">
          <cds-alert closable>
            This example is a closable alert inside an alert group with a status of "danger".
          </cds-alert>
          <cds-alert closable>
            This example is a closable alert with alert action buttons inside an alert group with a status of "danger".
            <cds-alert-actions>
              <cds-button>Button 1</cds-button>
              <a href="#" cds-text="link">Link 1</a>
            </cds-alert-actions>
          </cds-alert>
        </cds-alert-group>
      </div>

      <div cds-layout="vertical gap:sm">
        <cds-alert-group type="banner" status="info">
          <cds-alert closable>
            This example is a closable banner alert inside a banner alert group with a status of "info".
          </cds-alert>
        </cds-alert-group>

        <cds-alert-group type="banner" status="success">
          <cds-alert closable>
            This example is a closable alert with a status of "success" inside a banner alert group.
          </cds-alert>
        </cds-alert-group>

        <cds-alert-group type="banner" status="warning">
          <cds-alert closable>
            This example is a closable alert with alert action buttons and a status of "warning" inside a banner alert
            group.
            <cds-alert-actions>
              <cds-button>Button 1</cds-button>
              <a href="#">
                <cds-button>Link 1</cds-button>
              </a>
            </cds-alert-actions>
          </cds-alert>
        </cds-alert-group>

        <cds-alert-group type="banner" status="danger">
          <cds-alert closable>
            This example is a closable alert with a status of "danger" inside a banner alert group.
            <cds-alert-actions>
              <cds-button>Button 1</cds-button>
              <a href="#">
                <cds-button>Link 1</cds-button>
              </a>
            </cds-alert-actions>
          </cds-alert>
        </cds-alert-group>
      </div>
    </div>
  `;
}

export function customStyles() {
  return html`
    <style>
      .alert-group-custom,
      .alert-custom {
        --color: midnightblue;
        --icon-color: white;
        --background: mediumpurple;
        --border-radius: 0;
        --font-size: 1rem;
        --icon-size: 1.2rem;
        --border-width: 0.1rem;
        --border-color: midnightblue;
        --letter-spacing: normal;
      }

      .alert-custom-link {
        --color: yellow;
      }
    </style>
    <cds-alert-group class="alert-group-custom">
      <cds-alert class="alert-custom" closable>
        This example is an alert with a status of "info" inside a compact, lightweight alert group.
      </cds-alert>
      <cds-alert class="alert-custom" closable>
        This example is an alert with a status of "danger" and an inline action inside a compact, lightweight alert
        group.<cds-inline-button class="alert-custom-link">Clickable Action</cds-inline-button>
      </cds-alert>
    </cds-alert-group>
  `;
}

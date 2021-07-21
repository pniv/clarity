/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { html } from 'lit';
import '@cds/core/button-split/register.js';
import { CdsButtonSplit } from '@cds/core/button-split';
import { componentIsStable, createTestElement, onceEvent, removeTestElement } from '@cds/core/test';

describe('cds-button-split', () => {
  let testElement: HTMLElement;
  let component: CdsButtonSplit;
  let range: HTMLInputElement;

  beforeEach(async () => {
    testElement = await createTestElement(html` <cds-button-split>
      <input type="range" min="0" max="100" value="50" aria-label="resize" />
    </cds-button-split>`);
    component = testElement.querySelector<CdsButtonSplit>('cds-button-split');
    range = testElement.querySelector('input');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });

  it('should trigger a resize event', async () => {
    const eventPromise = onceEvent(range, 'input');
    await componentIsStable(component);

    component.dispatchEvent(new MouseEvent('touchstart', { bubbles: true }));
    component.dispatchEvent(new MouseEvent('touchmove', { bubbles: true, clientX: 100 }));
    component.dispatchEvent(new MouseEvent('touchend', { bubbles: true }));

    await eventPromise;
    expect(range.valueAsNumber).toBe(100);
  });
});

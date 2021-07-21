/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test';
import { CdsButtonSplit } from '@cds/core/button-split';
import { VoiceOverTest, Commands } from 'web-test-runner-voiceover/browser';
import '@cds/core/button-split/register.js';

describe('cds-button-split a11y', () => {
  let component: CdsButtonSplit;
  let element: HTMLElement;

  afterEach(() => {
    removeTestElement(element);
  });

  beforeEach(async () => {
    element = await createTestElement(html`
      <div cds-layout="horizontal gap:lg">
        <cds-button-split direction="vertical">
          <input type="range" value="50" aria-label="resize" />
        </cds-button-split>
      </div>
    `);
    component = element.querySelector<CdsButtonSplit>('cds-button-split');
  });

  it('should work with safari + voiceover', async () => {
    await componentIsStable(component);

    const test = new VoiceOverTest();
    test.queue(Commands.right, '50 resize slider');

    const result = await test.run();
    expect(result.values).toEqual(result.expected);
  });
});

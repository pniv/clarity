/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@cds/core/internal';
import { CdsButtonSplit } from './button-split.element.js';
import '@cds/core/icon/register.js';

registerElementSafely('cds-button-split', CdsButtonSplit);

declare global {
  interface HTMLElementTagNameMap {
    'cds-button-split': CdsButtonSplit;
  }
}

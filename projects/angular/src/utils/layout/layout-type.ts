/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  EXTRA_LARGE_BREAKPOINT,
  LARGE_BREAKPOINT,
  MEDIUM_BREAKPOINT,
  SMALL_BREAKPOINT,
} from '../breakpoints/breakpoints';

export enum LayoutType {
  extraSmall = 'xs',
  small = 'sm',
  medium = 'md',
  large = 'lg',
  extraLarge = 'xl',
}

export const LAYOUT_BREAKPOINTS = [
  {
    layout: LayoutType.extraSmall,
    maxWidth: SMALL_BREAKPOINT,
  },
  {
    layout: LayoutType.small,
    maxWidth: MEDIUM_BREAKPOINT,
  },
  {
    layout: LayoutType.medium,
    maxWidth: LARGE_BREAKPOINT,
  },
  {
    layout: LayoutType.large,
    maxWidth: EXTRA_LARGE_BREAKPOINT,
  },
  {
    layout: LayoutType.extraLarge,
    maxWidth: Number.MAX_VALUE,
  },
];

/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { TestBed } from '@angular/core/testing';
import { DOCUMENT } from '@angular/common';
import { ClrResponsiveLayoutService } from './responsive-layout.service';
import { LayoutType } from './layout-type';
import { take } from 'rxjs/operators';
import {
  EXTRA_LARGE_BREAKPOINT,
  LARGE_BREAKPOINT,
  MEDIUM_BREAKPOINT,
  SMALL_BREAKPOINT,
} from '../breakpoints/breakpoints';
import { noop } from 'rxjs';

interface ThisTest {
  layoutService: ClrResponsiveLayoutService;
}

describe('ResponsiveLayoutService', () => {
  beforeEach(function (this: ThisTest) {
    TestBed.configureTestingModule({
      providers: [
        ClrResponsiveLayoutService,
        {
          provide: DOCUMENT,
          useValue: document,
        },
      ],
    });

    this.layoutService = TestBed.inject(ClrResponsiveLayoutService);
  });

  afterEach(function (this: ThisTest) {
    this.layoutService.ngOnDestroy();
  });

  describe('#onChange initial emit', () => {
    it('WHEN document width < 576px THEN layout is XSi', function (this: ThisTest, done: DoneFn) {
      document.documentElement.style.width = `${SMALL_BREAKPOINT - 1}px`;
      this.layoutService.onChange.pipe(take(1)).subscribe((layout: LayoutType) => {
        expect(layout).toEqual(LayoutType.extraSmall);
        done();
      });
    });

    it('WHEN document width = 576px THEN layout is XS', function (this: ThisTest, done: DoneFn) {
      document.documentElement.style.width = `${SMALL_BREAKPOINT}px`;
      this.layoutService.onChange.pipe(take(1)).subscribe((layout: LayoutType) => {
        expect(layout).toEqual(LayoutType.extraSmall);
        done();
      });
    });

    it('WHEN document width < 768px THEN layout is SM', function (this: ThisTest, done: DoneFn) {
      document.documentElement.style.width = `${MEDIUM_BREAKPOINT}px`;
      this.layoutService.onChange.pipe(take(1)).subscribe((layout: LayoutType) => {
        expect(layout).toEqual(LayoutType.small);
        done();
      });
    });

    it('WHEN document width < 992px THEN layout is MD', function (this: ThisTest, done: DoneFn) {
      document.documentElement.style.width = `${LARGE_BREAKPOINT - 1}px`;
      this.layoutService.onChange.pipe(take(1)).subscribe((layout: LayoutType) => {
        expect(layout).toEqual(LayoutType.medium);
        done();
      });
    });

    it('WHEN document width < 1200px THEN layout is LG', function (this: ThisTest, done: DoneFn) {
      document.documentElement.style.width = `${EXTRA_LARGE_BREAKPOINT - 1}px`;
      this.layoutService.onChange.pipe(take(1)).subscribe((layout: LayoutType) => {
        expect(layout).toEqual(LayoutType.large);
        done();
      });
    });

    it('WHEN document width = 1201px THEN layout is XL', function (this: ThisTest, done: DoneFn) {
      document.documentElement.style.width = `${EXTRA_LARGE_BREAKPOINT + 1}px`;
      this.layoutService.onChange.pipe(take(1)).subscribe((layout: LayoutType) => {
        expect(layout).toEqual(LayoutType.extraLarge);
        done();
      });
    });
  });

  describe('#onChange document resize', () => {
    it('WHEN document is resized THEN onChange emits the new layout', function (this: ThisTest, done: DoneFn) {
      document.documentElement.style.width = `${SMALL_BREAKPOINT}px`;

      let first = true;
      this.layoutService.onChange.pipe(take(2)).subscribe((layout: LayoutType) => {
        if (first) {
          expect(layout).toEqual(LayoutType.extraSmall);
          first = false;
          document.documentElement.style.width = `${SMALL_BREAKPOINT + 1}px`;
          return;
        }

        expect(layout).toEqual(LayoutType.small);
        done();
      });
    });
  });

  describe('#ngOnDestroy', () => {
    it('unobserves the document element and completes the `onChange` observable', function (this: ThisTest) {
      let onChangeObservableCompleted = false;
      spyOn(this.layoutService['observer'], 'unobserve');
      this.layoutService.onChange.subscribe(noop, noop, () => {
        onChangeObservableCompleted = true;
      });

      this.layoutService.ngOnDestroy();

      expect(this.layoutService['observer'].unobserve).toHaveBeenCalledWith(document.documentElement);
      expect(onChangeObservableCompleted).toBeTruthy();
    });
  });
});

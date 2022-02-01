/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Inject, Injectable, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Observable, ReplaySubject } from 'rxjs';
import { LAYOUT_BREAKPOINTS, LayoutType } from './layout-type';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ClrResponsiveLayoutService implements OnDestroy {
  private document: Document;
  private observer: ResizeObserver;
  private resizeSubject = new ReplaySubject<LayoutType>(1);

  /**
   * Emits when the zoom level is changed.
   *
   * NOTE: This observable emits <b>outside Angular</b>. You might need to explicitly invoke
   * <code>ChangeDetectorRef.detectChanges()</code> to trigger Angular change detection.
   */
  // debounceTime() operator is added to avoid the following error:
  // "ResizeObserver loop limit exceeded thrown"
  // This error means that ResizeObserver was not able to deliver all observations within
  // a single animation frame. This happens if a change detection is run inside the subscriber.
  onChange: Observable<LayoutType> = this.resizeSubject.pipe(distinctUntilChanged(), debounceTime(10));

  constructor(@Inject(DOCUMENT) private doc: any) {
    // Workaround for https://github.com/angular/angular/issues/20351
    this.document = doc as Document;
    this.observe();
  }

  ngOnDestroy() {
    this.unobserve();
    this.resizeSubject.complete();
  }

  private observe(): void {
    this.observer = new ResizeObserver((entries: any[]) => {
      const entry: any = entries && entries[0];
      if (!entry) {
        return;
      }
      this.updateLayoutType(entry);
    });
    this.observer.observe(this.document.documentElement);
  }

  private unobserve() {
    this.observer.unobserve(this.document.documentElement);
  }

  private updateLayoutType(entry: any): void {
    const docCurrentWidth = entry.contentRect.width;
    const newResponsiveBreakpoint = LAYOUT_BREAKPOINTS.find(breakpoint => {
      return breakpoint.maxWidth >= docCurrentWidth;
    });

    if (newResponsiveBreakpoint) {
      this.resizeSubject.next(newResponsiveBreakpoint.layout);
    }
  }
}

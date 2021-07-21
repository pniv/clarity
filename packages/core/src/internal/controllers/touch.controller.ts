/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

// todo: cory tests
import { ReactiveElement, ReactiveController } from 'lit';
import { getPointerCoordinates } from '../utils/dom.js';

export type Touch = ReactiveElement;

/**
 * @internal Provides all nessesary events for touch gestures
 */
export function touch<T extends Touch>(): ClassDecorator {
  return (target: any) => target.addInitializer((instance: T) => new TouchController(instance));
}

export class TouchController<T extends Touch> implements ReactiveController {
  constructor(private host: T) {
    this.host.addController(this);
  }

  private startPosition: { x: number; y: number };
  private resizeHandler = this.resize.bind(this);
  private endHandler = this.end.bind(this);

  async hostConnected() {
    await this.host.updateComplete;
    this.host.addEventListener('mousedown', (e: any) => this.start(e), { passive: true });
    this.host.addEventListener('touchstart', (e: any) => this.start(e), { passive: true });
  }

  private start(e: any) {
    if (e.path.find((el: any) => el === this.host)) {
      this.startPosition = getPointerCoordinates(e);
      document.addEventListener('mousemove', this.resizeHandler, { passive: true });
      document.addEventListener('touchmove', this.resizeHandler, { passive: true });
      document.addEventListener('mouseup', this.endHandler, { passive: true });
      document.addEventListener('touchend', this.endHandler, { passive: true });
      this.host.dispatchEvent(new CustomEvent('cdsTouchStart', { detail: { ...this.startPosition } }));
    }
  }

  private end(e: any) {
    if (this.startPosition) {
      let direction;
      const { x, y } = getPointerCoordinates(e);
      if (x > this.startPosition.x + 20) {
        direction = 'right';
      } else if (x < this.startPosition.x - 20) {
        direction = 'left';
      }

      if (y > this.startPosition.y + 20) {
        direction = 'up';
      } else if (y < this.startPosition.y + 20) {
        direction = 'down';
      }

      document.removeEventListener('mousemove', this.resizeHandler, false);
      document.removeEventListener('touchmove', this.resizeHandler, false);
      document.removeEventListener('mouseup', this.end, false);
      document.removeEventListener('touchend', this.end, false);
      this.host.dispatchEvent(new CustomEvent('cdsTouchEnd', { detail: { x, y, direction } }));
    }
  }

  private resize(e: any) {
    requestAnimationFrame(() => {
      const { x, y } = getPointerCoordinates(e);
      const offsetY = -(this.startPosition.y - y);
      this.startPosition.y = y;

      const offsetX = -(this.startPosition.x - x);
      this.startPosition.x = x;
      this.host.dispatchEvent(new CustomEvent('cdsTouchMove', { detail: { x, y, offsetX, offsetY } }));
    });
  }
}

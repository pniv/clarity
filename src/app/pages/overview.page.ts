/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { componentRoutes } from '../app-routing.module';

@Component({
  styles: [
    `.item { border: .0625rem solid var(--cds-global-color-gray-400); border-radius: .1875rem;}`,
    `.item-img { height: 5rem; width: 100%; max-width: 50%; vertical-align: middle;}`,
  ],
  template: `
    <h2 cds-text="display" cds-layout="m-t:lg">Clarity Components</h2>

    <section cds-layout="m-y:xl grid gap:md cols@sm:12 cols@md:6 cols@lg:4 align:vertical-stretch">
      <a [routerLink]="['/', component.path]" *ngFor="let component of components" class="item">
        <section cds-layout="vertical" role="link" class="item-overview">
          <h3 cds-text="section" cds-layout="m-b:lg">
            <div cds-layout="horizontal gap:md p:lg align:center">
              {{component.path | menuTitle}}
            </div>
          </h3>
          <div cds-layout="vertical align:center p:md">
            <img src="/assets/{{component.path}}.svg" alt="{{component.path | menuTitle}} visual example" class="item-img">
          </div>
        </section>
      </a>
    </section>
  `,
})
export class OverviewPage {
  components = componentRoutes.slice(1); // Drop the overview
}

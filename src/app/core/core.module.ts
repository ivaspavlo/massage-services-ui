
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoreRoutingModule } from './core-routing.module';

import { CORE_MATERIAL_MODULES } from './constants/core-material-modules';
import { CORE_PROVIDERS } from './providers';

import { CorePageModule } from './core-page/core-page.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CorePageModule,
    CoreRoutingModule,
    ...CORE_MATERIAL_MODULES
  ],
  providers: [
    ...CORE_PROVIDERS
  ],
  exports: [
    CoreRoutingModule
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import available only in AppModule');
    }
  }
}

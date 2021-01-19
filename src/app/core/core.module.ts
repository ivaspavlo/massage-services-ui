
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CoreRoutingModule } from './core-routing.module';
import { coreModuleState, coreModuleStateToken, metaReducers } from './store/reducers';

import { CORE_EFFECTS } from './store/effects';
import { CORE_MATERIAL_MODULES } from './constants/core-material-modules';
import { CORE_PROVIDERS } from './providers';

import { CorePageModule } from './core-page/core-page.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CorePageModule,
    CoreRoutingModule,
    StoreModule.forRoot(coreModuleStateToken, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    EffectsModule.forRoot(CORE_EFFECTS),
    ...CORE_MATERIAL_MODULES
  ],
  providers: [
    { provide: coreModuleStateToken, useValue: coreModuleState },
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

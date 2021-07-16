

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { DialogModule } from '@app/modules/ui';
import { IS_PROD } from '@env/environment';

import { CoreTranslationModule } from './core-translation.module';

import { CORE_PROVIDERS } from './providers';
import { CORE_GUARDS } from './guards';


@NgModule({
  imports: [
    DialogModule,
    CoreTranslationModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: IS_PROD })
  ],
  providers: [
    ...CORE_PROVIDERS,
    ...CORE_GUARDS
  ],
  exports: [ ]
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

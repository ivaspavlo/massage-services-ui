
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { ToastComponent } from './container/toast.component';
import { defaultToastConfig, TOAST_CONFIG_TOKEN } from './toast-config';


@NgModule({
  declarations: [
    ToastComponent
  ],
  imports: [
    CommonModule,
    OverlayModule
  ]
})
export class ToastModule {
  public static forRoot(config = defaultToastConfig): ModuleWithProviders<ToastModule> {
    return {
      ngModule: ToastModule,
      providers: [
        {
          provide: TOAST_CONFIG_TOKEN,
          useValue: {...defaultToastConfig, ...config}
        }
      ]
    };
  }
}

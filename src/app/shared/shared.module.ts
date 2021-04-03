
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DialogModule } from '@app/modules/ui';
import { MATERIAL_MODULES } from '@app/core/constants';

import { APP_DIRECTIVES } from './directives';
import { APP_PIPES } from './pipes';
import { APP_COMPONENTS } from './components';


@NgModule({
  declarations: [
    ...APP_DIRECTIVES,
    ...APP_PIPES,
    ...APP_COMPONENTS
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    ...MATERIAL_MODULES
  ],
  exports: [
    ...APP_DIRECTIVES,
    ...APP_PIPES,
    ...APP_COMPONENTS
  ]
})
export class SharedModule { }

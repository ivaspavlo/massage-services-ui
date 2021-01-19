
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { APP_DIRECTIVES } from './directives';


@NgModule({
  declarations: [
    ...APP_DIRECTIVES
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...APP_DIRECTIVES
  ]
})
export class SharedModule { }

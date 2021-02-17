
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { APP_DIRECTIVES } from './directives';
import { APP_PIPES } from './pipes';


@NgModule({
  declarations: [
    ...APP_DIRECTIVES,
    ...APP_PIPES
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...APP_DIRECTIVES,
    ...APP_PIPES
  ]
})
export class SharedModule { }

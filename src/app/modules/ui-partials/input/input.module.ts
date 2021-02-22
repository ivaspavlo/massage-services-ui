
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputComponent } from './container/input.component';
import { FirstErrorPipe } from './pipes/get-first-value.pipe';


@NgModule({
  declarations: [
    InputComponent,
    FirstErrorPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputComponent
  ]
})
export class InputModule { }

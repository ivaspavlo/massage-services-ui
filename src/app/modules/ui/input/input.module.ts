
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './container/input.component';
import { FirstErrorPipe } from './pipes/get-first-value.pipe';


@NgModule({
  declarations: [
    InputComponent,
    FirstErrorPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent
  ]
})
export class InputModule { }

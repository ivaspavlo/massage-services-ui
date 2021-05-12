
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './container/input.component';
import { PARTIALS } from './partials';
import { PIPES } from './pipes';


@NgModule({
  declarations: [
    InputComponent,
    ...PIPES,
    ...PARTIALS
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

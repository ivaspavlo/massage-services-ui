import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonAsideComponent } from './container/button-aside.component';


@NgModule({
  declarations: [
    ButtonAsideComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonAsideComponent
  ]
})
export class ButtonAsideModule { }

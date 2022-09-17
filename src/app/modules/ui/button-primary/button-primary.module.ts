import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonPrimaryComponent } from './container/button-primary.component';


@NgModule({
  declarations: [
    ButtonPrimaryComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ButtonPrimaryComponent
  ]
})
export class ButtonPrimaryModule { }

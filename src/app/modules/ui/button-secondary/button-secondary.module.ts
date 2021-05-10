
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonSecondaryComponent } from './container/button-secondary.component';


@NgModule({
  declarations: [
    ButtonSecondaryComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ButtonSecondaryComponent
  ]
})
export class ButtonSecondaryModule { }

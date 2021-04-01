
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhoneAnimationComponent } from './container/phone-animation.component';


@NgModule({
  declarations: [
    PhoneAnimationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PhoneAnimationComponent
  ]
})
export class PhoneAnimationModule { }

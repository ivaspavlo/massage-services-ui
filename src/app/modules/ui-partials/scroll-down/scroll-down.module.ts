
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollDownComponent } from './scroll-down/scroll-down.component';


@NgModule({
  declarations: [
    ScrollDownComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScrollDownComponent
  ]
})
export class ScrollDownModule { }

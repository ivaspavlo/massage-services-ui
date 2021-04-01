
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipComponent } from './container/tooltip.component';
import { TooltipDirective } from './directives/tooltip.directive';


@NgModule({
  declarations: [
    TooltipDirective,
    TooltipComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TooltipDirective
  ]
})
export class TooltipModule { }

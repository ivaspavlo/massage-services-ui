
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipComponent } from './container/tooltip.component';
import { TooltipDirective } from './directives/tooltip.directive';


@NgModule({
  declarations: [
    TooltipComponent,
    TooltipDirective
  ],
  imports: [
    CommonModule
  ]
})
export class TooltipModule { }

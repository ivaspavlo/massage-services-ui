import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { PopoverComponent } from './container/popover.component';
import { PopoverService } from './popover.service';


@NgModule({
  declarations: [
    PopoverComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
  ],
  providers: [
    PopoverService
  ]
})
export class PopoverModule { }

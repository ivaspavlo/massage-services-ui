
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { PopoverComponent } from './popover/popover.component';
import { PopoverService } from './popover.service';


@NgModule({
  declarations: [
    PopoverComponent
  ],
  providers: [
    PopoverService
  ],
  imports: [
    CommonModule,
    OverlayModule
  ]
})
export class PopoverModule { }

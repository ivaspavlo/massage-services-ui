
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatExpansionModule } from '@angular/material/expansion';

import { NgExpansionPanelComponent } from './ng-expansion-panel/ng-expansion-panel.component';


@NgModule({
  declarations: [
    NgExpansionPanelComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  exports: [
    NgExpansionPanelComponent
  ]
})
export class NgExpansionPanelModule { }

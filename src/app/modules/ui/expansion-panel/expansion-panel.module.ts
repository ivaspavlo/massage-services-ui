
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';


@NgModule({
  declarations: [
    ExpansionPanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ExpansionPanelComponent
  ]
})
export class ExpansionPanelModule { }

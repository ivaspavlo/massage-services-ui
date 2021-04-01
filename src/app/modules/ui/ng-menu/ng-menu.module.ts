
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { NgMenuComponent } from './ng-menu/ng-menu.component';


@NgModule({
  declarations: [
    NgMenuComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule
  ],
  exports: [
    NgMenuComponent
  ]
})
export class NgMenuModule { }

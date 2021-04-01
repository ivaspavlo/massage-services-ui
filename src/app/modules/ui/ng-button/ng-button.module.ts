
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { NgButtonComponent } from './ng-button-container/ng-button.component';


@NgModule({
  declarations: [
    NgButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    NgButtonComponent
  ]
})
export class NgButtonModule { }

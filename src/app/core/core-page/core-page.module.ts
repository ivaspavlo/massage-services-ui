
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderModule } from '@app/modules/ui-partials';

import { CorePageContainerComponent } from './core-page-container/core-page-container.component';


@NgModule({
  declarations: [
    CorePageContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule
  ]
})
export class CorePageModule { }

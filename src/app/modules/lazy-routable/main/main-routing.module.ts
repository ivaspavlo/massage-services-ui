
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MAIN_ROUTES } from './constants/main-routes';


@NgModule({
  imports: [
    RouterModule.forChild(MAIN_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { INFO_ROUTES } from './constants';


@NgModule({
  imports: [
    RouterModule.forChild(INFO_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class InfoRoutingModule { }

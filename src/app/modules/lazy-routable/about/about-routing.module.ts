import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ABOUT_ROUTES } from './constants';


@NgModule({
  imports: [
    RouterModule.forChild(ABOUT_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AboutRoutingModule { }

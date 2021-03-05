
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BLOG_ROUTES } from './constants';


@NgModule({
  imports: [
    RouterModule.forChild(BLOG_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class BlogRoutingModule { }

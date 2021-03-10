
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { ArticleModule } from '@app/modules/ui-partials';

import { COMPONENTS } from './container';


@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    BlogRoutingModule,
    CommonModule,
    ArticleModule
  ]
})
export class BlogModule { }

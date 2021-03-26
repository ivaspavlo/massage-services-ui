
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleModule, BlogArticleModule } from '@app/modules/ui-partials';
import { BlogRoutingModule } from './blog-routing.module';

import { COMPONENTS } from './pages';


@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    BlogRoutingModule,
    CommonModule,
    ArticleModule,
    BlogArticleModule
  ]
})
export class BlogModule { }

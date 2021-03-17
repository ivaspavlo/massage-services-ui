
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { ArticleModule, BlogArticleModule } from '@app/modules/ui-partials';

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


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleCardModule, BlogArticleModule } from '@app/modules/ui';
import { BlogRoutingModule } from './blog-routing.module';

import { COMPONENTS } from './pages';


@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    BlogRoutingModule,
    CommonModule,
    ArticleCardModule,
    BlogArticleModule
  ]
})
export class BlogModule { }

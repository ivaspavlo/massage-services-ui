
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogArticleComponent } from './container/blog-article.component';
import { TooltipModule } from '../tooltip/tooltip.module'; // TODO: refactor imports


@NgModule({
  declarations: [
    BlogArticleComponent
  ],
  imports: [
    CommonModule,
    TooltipModule
  ],
  exports: [
    BlogArticleComponent
  ]
})
export class BlogArticleModule { }

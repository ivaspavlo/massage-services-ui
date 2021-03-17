
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogArticleComponent } from './container/blog-article.component';


@NgModule({
  declarations: [
    BlogArticleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BlogArticleComponent
  ]
})
export class BlogArticleModule { }

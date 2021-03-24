
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogArticleComponent } from './container/blog-article.component';

// For testing purposes only, remove after
import { TooltipModule } from '../tooltip/tooltip.module';


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

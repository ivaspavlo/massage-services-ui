
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ArticleCardComponent } from './container/article-card.component';


@NgModule({
  declarations: [
    ArticleCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ArticleCardComponent
  ]
})
export class ArticleCardModule { }

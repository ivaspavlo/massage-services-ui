
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleCardModule, BlogArticleModule } from '@app/modules/ui';
import { HeaderModule } from '@app/modules/smart-partials';
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
    BlogArticleModule,
    HeaderModule
  ]
})
export class BlogModule { }

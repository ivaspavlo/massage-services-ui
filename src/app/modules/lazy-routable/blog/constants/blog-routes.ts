
import { Routes } from '@angular/router';

import { BlogArticleComponent } from '../container/partials/blog-article/blog-article.component';
import { BlogComponent } from '../container/blog.component';


export enum BLOG_ROUTE_NAMES {
  BLANK = '',
  ARTICLE = 'article/:id'
}

export const BLOG_ROUTES: Routes = [
  {
    path: BLOG_ROUTE_NAMES.BLANK,
    component: BlogComponent
  }, {
    path: BLOG_ROUTE_NAMES.ARTICLE,
    component: BlogArticleComponent
  }
];

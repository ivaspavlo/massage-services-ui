
import { Routes } from '@angular/router';

import { BlogComponent } from '../pages/blog/blog.component';
import { ArticleComponent } from '../pages/article/article.component';


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
    component: ArticleComponent
  }
];

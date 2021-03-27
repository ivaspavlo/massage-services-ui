
import { Routes } from '@angular/router';
import { BlogItemComponent } from '../pages/blog-item/blog-item.component';
import { BlogComponent } from '../pages/blog/blog.component';


export enum BLOG_ROUTE_NAMES {
  BLANK = '',
  ITEM = ':id'
}

export const BLOG_ROUTES: Routes = [
  {
    path: BLOG_ROUTE_NAMES.BLANK,
    component: BlogComponent
  }, {
    path: BLOG_ROUTE_NAMES.ITEM,
    component: BlogItemComponent
  }
];

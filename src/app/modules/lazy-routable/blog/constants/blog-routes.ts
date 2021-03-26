
import { Routes } from '@angular/router';
import { BlogComponent, BlogItemComponent } from '../pages';


export const BlogItemParamName = 'id';

export enum BLOG_ROUTE_NAMES {
  BLANK = '',
  ITEM = '/:id'
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

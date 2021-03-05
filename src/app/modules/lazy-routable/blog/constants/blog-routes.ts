
import { Routes } from '@angular/router';
import { BlogComponent } from '../container/blog.component';


export enum BLOG_ROUTE_NAMES {
  BLANK = ''
}

export const BLOG_ROUTES: Routes = [
  {
    path: BLOG_ROUTE_NAMES.BLANK,
    component: BlogComponent
  }
];

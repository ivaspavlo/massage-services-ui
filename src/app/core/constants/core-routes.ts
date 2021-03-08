
import { Routes } from '@angular/router';
import { AuthGuard } from '../guards';
import { CorePageContainerComponent } from '../core-page/core-page-container/core-page-container.component';


export enum CORE_ROUTE_NAMES {
  BLANK = '',
  AUTH = 'auth',
  MAIN = 'main',
  BLOG = 'blog',
  OTHER = '**',
  NOT_FOUND = '404'
}

export const CORE_ROUTES: Routes = [
  {
    path: CORE_ROUTE_NAMES.BLANK,
    component: CorePageContainerComponent,
    children: [
      {
        path: CORE_ROUTE_NAMES.BLANK,
        pathMatch: 'full',
        redirectTo: CORE_ROUTE_NAMES.MAIN
      }, {
        path: CORE_ROUTE_NAMES.MAIN,
        loadChildren: () => import('@app/modules/lazy-routable/main/main.module').then(m => m.MainModule)
      }, {
        path: CORE_ROUTE_NAMES.BLOG,
        loadChildren: () => import('@app/modules/lazy-routable/blog/blog.module').then(m => m.BlogModule)
      }, {
        path: CORE_ROUTE_NAMES.AUTH,
        loadChildren: () => import('@app/modules/lazy-routable/auth/auth.module').then(m => m.AuthModule)
      }, {
        path: CORE_ROUTE_NAMES.OTHER,
        pathMatch: 'full',
        redirectTo: CORE_ROUTE_NAMES.NOT_FOUND,
      }, {
        path: CORE_ROUTE_NAMES.NOT_FOUND,
        loadChildren: () => import('@app/modules/lazy-routable/not-found/not-found.module').then(m => m.NotFoundModule)
      }
    ]
  }
];

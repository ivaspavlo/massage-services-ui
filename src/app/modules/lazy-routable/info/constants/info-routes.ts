import { Routes } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { InfoContainerComponent } from '../pages/info-container/info-container.component';
import { ProductsComponent } from '../pages/products/products.component';


export enum INFO_ROUTE_NAMES {
  BLANK = '',
  ABOUT = 'about',
  PRODUCTS = 'services'
}

export const INFO_ROUTES: Routes = [
  {
    path: INFO_ROUTE_NAMES.BLANK,
    component: InfoContainerComponent,
    children: [
      {
        path: INFO_ROUTE_NAMES.ABOUT,
        component: AboutComponent
      }, {
        path: INFO_ROUTE_NAMES.PRODUCTS,
        component: ProductsComponent
      }, {
        path: INFO_ROUTE_NAMES.BLANK,
        pathMatch: 'full',
        redirectTo: INFO_ROUTE_NAMES.ABOUT
      }
    ]
  }
];
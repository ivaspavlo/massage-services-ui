
import { Routes } from '@angular/router';
import { NotFoundContainerComponent } from '../not-found-container/not-found-container.component';


export enum MAIN_ROUTE_NAMES {
  BLANK = ''
}

export const NOT_FOUND_ROUTES: Routes = [
  {
    path: MAIN_ROUTE_NAMES.BLANK,
    component: NotFoundContainerComponent
  }
];

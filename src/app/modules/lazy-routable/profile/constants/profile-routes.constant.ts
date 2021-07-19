
import { Routes } from '@angular/router';
import { ProfileContainerComponent } from '../pages/profile-container/profile-container.component';


export enum PROFILE_ROUTE_NAMES {
  BLANK = ''
}

export const PROFILE_ROUTES: Routes = [
  {
    path: PROFILE_ROUTE_NAMES.BLANK,
    component: ProfileContainerComponent
  }
];

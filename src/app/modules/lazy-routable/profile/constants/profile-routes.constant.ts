import { Routes } from '@angular/router';
import { ProfileComponent } from '../pages/profile/profile.component';


export enum PROFILE_ROUTE_NAMES {
  BLANK = ''
}

export const PROFILE_ROUTES: Routes = [
  {
    path: PROFILE_ROUTE_NAMES.BLANK,
    component: ProfileComponent
  }
];

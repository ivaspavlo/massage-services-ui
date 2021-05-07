
import { Routes } from '@angular/router';

import { AuthComponent } from '../pages/container/auth.component';
import { LoginComponent } from '../pages/login/login.component';
import { RegisterComponent } from '../pages/register/register.component';


export enum AUTH_ROUTE_NAMES {
  BLANK = '',
  LOGIN = 'login',
  REGISTER = 'register'
}

export const AUTH_ROUTES: Routes = [
  {
    path: AUTH_ROUTE_NAMES.BLANK,
    component: AuthComponent,
    children: [
      {
        path: AUTH_ROUTE_NAMES.LOGIN,
        component: LoginComponent
      }, {
        path: AUTH_ROUTE_NAMES.REGISTER,
        component: RegisterComponent
      }
    ]
  }
];

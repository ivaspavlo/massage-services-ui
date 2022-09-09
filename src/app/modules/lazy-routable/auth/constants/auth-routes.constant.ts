import { Routes } from '@angular/router';
import { AuthComponent } from '../pages/container/auth.component';
import { ForgotPasswordComponent } from '../pages/forgot-password/forgot-password.component';
import { LoginComponent } from '../pages/login/login.component';
import { RegisterComponent } from '../pages/register/register.component';
import { ResetPasswordComponent } from '../pages/reset-password/reset-password.component';


export enum AUTH_ROUTE_NAMES {
  BLANK = '',
  LOGIN = 'login',
  REGISTER = 'register',
  FORGOT = 'forgot',
  RESET = 'reset'
}

export const AUTH_ROUTES: Routes = [
  {
    path: AUTH_ROUTE_NAMES.BLANK,
    component: AuthComponent,
    children: [
      {
        path: AUTH_ROUTE_NAMES.BLANK,
        redirectTo: AUTH_ROUTE_NAMES.LOGIN
      }, {
        path: AUTH_ROUTE_NAMES.LOGIN,
        component: LoginComponent
      }, {
        path: AUTH_ROUTE_NAMES.REGISTER,
        component: RegisterComponent
      }, {
        path: AUTH_ROUTE_NAMES.FORGOT,
        component: ForgotPasswordComponent
      }, {
        path: AUTH_ROUTE_NAMES.RESET,
        component: ResetPasswordComponent
      }
    ]
  }
];

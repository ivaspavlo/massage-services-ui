
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginFormModule } from '@app/modules/ui';
import { AuthRoutingModule } from './auth-routing.module';

import { PAGES } from './pages';


@NgModule({
  declarations: [
    ...PAGES
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    LoginFormModule
  ]
})
export class AuthModule { }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonPrimaryModule, ButtonSecondaryModule, CheckboxModule, InputModule, LoginFormModule, ToastModule, ProfileFormModule } from '@app/modules/ui';
import { SharedModule } from '@app/shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

import { PAGES } from './pages';


@NgModule({
  declarations: [
    ...PAGES
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    AuthRoutingModule,
    LoginFormModule,
    ButtonPrimaryModule,
    ButtonSecondaryModule,
    InputModule,
    CheckboxModule,
    ProfileFormModule,
    ToastModule.forRoot()
  ]
})
export class AuthModule { }

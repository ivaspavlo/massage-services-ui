
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreTranslationModule } from '@app/core/core-translation.module';
import { SharedModule } from '@app/shared/shared.module';
import { LogoModule, ButtonPrimaryModule, ButtonSecondaryModule, CheckboxModule, InputModule, LoginFormModule, ToastModule, ProfileFormModule } from '@app/modules/ui';

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
    LogoModule,
    ToastModule.forRoot(),
    CoreTranslationModule.forChild()
  ]
})
export class AuthModule { }

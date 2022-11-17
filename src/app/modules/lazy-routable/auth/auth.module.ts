import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreTranslationModule } from '@app/core/core-translation.module';
import { SharedModule } from '@app/shared/shared.module';
import { ButtonPrimaryModule, ButtonSecondaryModule, CheckboxModule, InputModule, ToastModule, ProfileFormModule } from '@app/modules/ui';

import { AuthRoutingModule } from './auth-routing.module';
import { PAGES } from './pages';
import { PARTIALS } from './partials';


@NgModule({
  declarations: [
    ...PAGES,
    ...PARTIALS
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    AuthRoutingModule,
    ButtonPrimaryModule,
    ButtonSecondaryModule,
    InputModule,
    CheckboxModule,
    ProfileFormModule,
    ToastModule.forRoot(),
    CoreTranslationModule.forChild()
  ]
})
export class AuthModule { }

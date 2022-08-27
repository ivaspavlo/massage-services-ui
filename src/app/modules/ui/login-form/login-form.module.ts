
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreTranslationModule } from '@app/core/core-translation.module';

import { InputModule } from '../input/input.module';
import { ButtonPrimaryModule } from '../button-primary/button-primary.module';
import { ButtonSecondaryModule } from '../button-secondary/button-secondary.module';

import { LoginFormComponent } from './container/login-form.component';


@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    InputModule,
    ButtonPrimaryModule,
    ButtonSecondaryModule,
    CoreTranslationModule.forChild()
  ],
  exports: [
    LoginFormComponent
  ]
})
export class LoginFormModule { }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule,
    InputModule,
    ButtonPrimaryModule,
    ButtonSecondaryModule
  ],
  exports: [
    LoginFormComponent
  ]
})
export class LoginFormModule { }

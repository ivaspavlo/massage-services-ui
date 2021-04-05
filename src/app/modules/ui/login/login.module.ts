
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InputModule } from '@app/modules/ui/input/input.module';

import { LoginComponent } from './container/login.component';
import { ButtonMainModule } from '../button-main/button-main.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputModule,
    ButtonMainModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }

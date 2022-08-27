import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@app/shared/shared.module';
import { CoreTranslationModule } from '@app/core/core-translation.module';

import { ButtonPrimaryModule } from '../button-primary/button-primary.module';
import { InputModule } from '../input/input.module';
import { CheckboxModule } from '../checkbox/checkbox.module';
import { DatePickerModule } from '../date-picker/date-picker.module';

import { ProfileFormComponent } from './container/profile-form.component';


@NgModule({
  declarations: [
    ProfileFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonPrimaryModule,
    InputModule,
    CheckboxModule,
    RouterModule,
    DatePickerModule,
    CoreTranslationModule.forChild()
  ],
  exports: [
    ProfileFormComponent
  ]
})
export class ProfileFormModule { }

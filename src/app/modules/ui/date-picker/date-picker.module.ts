
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularMyDatePickerModule } from 'angular-mydatepicker';

import { DatePickerContainerComponent } from './container/date-picker-container.component';


@NgModule({
  declarations: [
    DatePickerContainerComponent
  ],
  imports: [
    CommonModule,
    AngularMyDatePickerModule,
    FormsModule
  ],
  exports: [
    DatePickerContainerComponent
  ]
})
export class DatePickerModule { }

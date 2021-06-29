
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DpDatePickerModule } from 'ng2-date-picker';

import { DatePickerContainerComponent } from './container/date-picker-container.component';


@NgModule({
  declarations: [
    DatePickerContainerComponent
  ],
  imports: [
    CommonModule,
    DpDatePickerModule,
    FormsModule
  ],
  exports: [
    DatePickerContainerComponent
  ]
})
export class DatePickerModule { }

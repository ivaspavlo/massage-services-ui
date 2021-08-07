import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateTimeCardComponent } from './container/date-time-card.component';
import { FormatDateTimePipe } from './pipes/format-date-time-pair.pipe';


@NgModule({
  declarations: [
    DateTimeCardComponent,
    FormatDateTimePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DateTimeCardComponent
  ]
})
export class DateTimeCardModule { }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from '@app/modules/smart-partials';

import { BookingRoutingModule } from './booking-routing.module';
import { PAGES } from './pages';


@NgModule({
  declarations: [
    ...PAGES
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    HeaderModule
  ]
})
export class BookingModule { }

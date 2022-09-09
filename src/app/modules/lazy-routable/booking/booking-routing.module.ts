import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BOOKING_ROUTES } from './constants/booking-routes.constant';


@NgModule({
  imports: [
    RouterModule.forChild(BOOKING_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class BookingRoutingModule { }

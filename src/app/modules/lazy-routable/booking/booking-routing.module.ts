import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BOOKING_ROUTES } from './constants/booking-routes.constant';
import { BOOKING_RESOLVERS } from './resolvers';


@NgModule({
  imports: [
    RouterModule.forChild(BOOKING_ROUTES)
  ],
  providers: [
    ...BOOKING_RESOLVERS
  ],
  exports: [
    RouterModule
  ]
})
export class BookingRoutingModule { }

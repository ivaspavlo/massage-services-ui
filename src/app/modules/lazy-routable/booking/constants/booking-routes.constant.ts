
import { Routes } from '@angular/router';
import { BookingComponent } from '../pages/container/booking.component';
import { ReservationComponent } from '../pages/reservation/reservation.component';


export enum BOOKING_ROUTE_NAMES {
  BLANK = '',
  RESERVATION = 'reservation',
  GIFTS = 'gifts'
}

export const BOOKING_ROUTES: Routes = [
  {
    path: BOOKING_ROUTE_NAMES.BLANK,
    component: BookingComponent,
    children: [
      {
        path: BOOKING_ROUTE_NAMES.RESERVATION,
        component: ReservationComponent
      }, {
        path: '',
        pathMatch: 'full',
        redirectTo: BOOKING_ROUTE_NAMES.RESERVATION
      }
    ]
  }
];

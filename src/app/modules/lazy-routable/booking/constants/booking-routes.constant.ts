
import { Routes } from '@angular/router';
import { BookingComponent } from '../pages/container/booking.component';


export enum BOOKING_ROUTE_NAMES {
  BLANK = ''
}

export const BOOKING_ROUTES: Routes = [
  {
    path: BOOKING_ROUTE_NAMES.BLANK,
    component: BookingComponent
  }
];

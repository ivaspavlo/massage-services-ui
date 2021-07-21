
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { IMassageBooking } from '../interfaces';
import { BookingService } from '../services/booking.service';


@Injectable()
export class MassageBookingResolver implements Resolve<IMassageBooking> {
  
  constructor(
    private bookingService: BookingService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> {
    return this.bookingService.getBookingDataById(route.paramMap.get('id'));
  }

}

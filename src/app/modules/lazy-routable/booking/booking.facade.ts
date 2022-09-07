import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IBooking, IProduct, IBookingTime } from './interfaces';
import { BookingService } from './services/booking.service';
import { IGift } from './interfaces/gift.interface';


@Injectable()
export class BookingFacade {
  
  constructor(
    private bookingService: BookingService
  ) { }

  public getMassageList(): Observable<IProduct[]> {
    return this.bookingService.getMassageList().pipe(
      catchError(() => of([]))
    );
  }
  
  public getGiftCards(): Observable<IGift[]> {
    return this.bookingService.getGiftCards().pipe(
      catchError(() => of([]))
    );
  }

  public getAvailableDates(): Observable<IBooking[]> {
    return this.bookingService.getAvailableDates().pipe(
      catchError(() => of([]))
    );
  }

  public confirmBooking(req: IBookingTime[]): Observable<any> {
    return this.bookingService.confirmBooking(req);
  }

}

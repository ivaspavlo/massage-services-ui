import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BookingService } from '@app/core/services';
import { IBooking, IProduct, IBookingSlot } from './interfaces';
import { IGift } from './interfaces/gift.interface';


@Injectable()
export class BookingFacade {
  
  constructor(
    private bookingService: BookingService
  ) { }

  public getProducts(): Observable<IProduct[]> {
    return this.bookingService.getProducts().pipe(
      catchError(() => of([]))
    );
  }
  
  public getGiftCards(): Observable<IGift[]> {
    return this.bookingService.getGiftCards().pipe(
      catchError(() => of([]))
    );
  }

  public getAvailableSlots(): Observable<IBooking[]> {
    return this.bookingService.getAvailableSlots().pipe(
      catchError(() => of([]))
    );
  }

  public addToCart(selectedSlots: IBookingSlot[]): Observable<any> {
    return this.bookingService.addTimeslotsToCart(selectedSlots);
  }

}

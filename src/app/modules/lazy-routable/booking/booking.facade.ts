import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BookingService } from '@app/core/services';
import { IBookingAvailable, IProduct, IBookingSlot } from './interfaces';


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
  
  public getGiftCards(): Observable<IProduct[]> {
    return this.bookingService.getGiftCards().pipe(
      catchError(() => of([]))
    );
  }

  public getAvailableSlots(productId: string): Observable<IBookingSlot[]> {
    return this.bookingService.getAvailableSlots(productId).pipe(
      catchError(() => of([]))
    );
  }

  public addBookingSlotsToCart(value: IBookingSlot[]): Observable<boolean> {
    return this.bookingService.addBookingSlotsToCart(value);
  }

  public addGiftsToCart(value: IProduct): Observable<boolean> {
    return this.bookingService.addGiftsToCart(value);
  }

}

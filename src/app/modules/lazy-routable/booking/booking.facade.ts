import { Injectable } from '@angular/core';
import { IProductCard } from '@app/interfaces';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { BookingService } from './services/booking.service';


@Injectable()
export class BookingFacade {
  
  constructor(
    private bookingService: BookingService
  ) { }
  
  public getGiftCards(): Observable<IProductCard[]> {
    return this.bookingService.getGiftCards().pipe(
      catchError(_ => of([]))
    );
  }
  
}

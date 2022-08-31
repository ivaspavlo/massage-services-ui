import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IProduct } from './interfaces';

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
  
}

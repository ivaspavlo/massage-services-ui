
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IProductCard } from '@app/interfaces';

import { GiftCards } from '../constants/gift-cards.constant';


@Injectable({
  providedIn: 'root'
})
export class BookingService {
  
  constructor() { }
  
  public getBookingDataById(id: string): Observable<any> {
    // TODO: API to be implemented
    return of(null);
  }
  
  public getGiftCards(): Observable<IProductCard[]> {
    // TODO: API to be implemented
    return of(GiftCards);
  }
  
}

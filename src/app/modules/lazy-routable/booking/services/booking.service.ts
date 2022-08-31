import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from '../interfaces';
import { IGift } from '../interfaces/gift.interface';


const products = [
  {
    id: '1',
    title: 'booking.reserve.type-anti-cellulite.title',
    subtitle: 'booking.reserve.type-anti-cellulite.subtitle',
    price: '500'
  }, {
    id: '2',
    title: 'booking.reserve.sport.title',
    subtitle: 'booking.reserve.sport.subtitle',
    price: '100'
  }, {
    id: '3',
    title: 'booking.reserve.shwedish.title',
    subtitle: 'booking.reserve.shwedish.subtitle',
    price: '200'
  }, {
    id: '4',
    title: 'booking.reserve.massage.type-relax.title',
    subtitle: 'booking.reserve.massage.type-relax.subtitle',
    price: '300'
  }, {
    id: '5',
    title: 'booking.reserve.massage.type-lymph-drainage.title',
    subtitle: 'booking.reserve.massage.type-lymph-drainage.subtitle',
    price: '300'
  }
];

const gifts = [
  {
    id: '1',
    price: '300'
  }, {
    id: '2',
    price: '500'
  }, {
    id: '3',
    price: '700'
  }, {
    id: '4',
    price: '1000'
  }
]

@Injectable()
export class BookingService {
  
  constructor() { }

  public getMassageList(): Observable<IProduct[]> {
    return of(products);
  }
  
  public getBookingDataById(id: string): Observable<any> {
    return of(null);
  }
  
  public getGiftCards(): Observable<IGift[]> {
    return of(gifts);
  }
  
}

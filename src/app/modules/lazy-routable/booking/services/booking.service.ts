import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from '../interfaces';
import { IGift } from '../interfaces/gift.interface';


const products = [
  {
    id: '1',
    title: 'booking.reserve.type-anti-cellulite.title',
    subtitle: 'booking.reserve.type-anti-cellulite.subtitle',
    desc: 'booking.reserve.type-anti-cellulite.desc',
    price: '500'
  }, {
    id: '2',
    title: 'booking.reserve.type-sport.title',
    subtitle: 'booking.reserve.type-sport.subtitle',
    desc: 'booking.reserve.type-sport.desc',
    price: '400'
  }, {
    id: '3',
    title: 'booking.reserve.type-shwedish.title',
    subtitle: 'booking.reserve.type-shwedish.subtitle',
    desc: 'booking.reserve.type-shwedish.desc',
    price: '400'
  }, {
    id: '4',
    title: 'booking.reserve.type-relax.title',
    subtitle: 'booking.reserve.type-relax.subtitle',
    desc: 'booking.reserve.type-relax.desc',
    price: '300'
  }, {
    id: '5',
    title: 'booking.reserve.type-lymph-drainage.title',
    subtitle: 'booking.reserve.type-lymph-drainage.subtitle',
    desc: 'booking.reserve.type-lymph-drainage.desc',
    price: '450'
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

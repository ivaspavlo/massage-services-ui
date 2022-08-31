import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProductCard } from '@app/interfaces';
import { IProduct } from '../interfaces';


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
    background: '/assets/img/png/service-bg.png',
    title: 'booking.gift.one.title',
    info: 'booking.gift.info',
    button: 'booking.gift.buy-now'
  }, {
    id: '2',
    background: '/assets/img/png/service-bg.png',
    title: 'booking.gift.two.title',
    info: 'booking.gift.info',
    button: 'booking.gift.buy-now'
  }, {
    id: '3',
    background: '/assets/img/png/service-bg.png',
    title: 'booking.gift.three.title',
    info: 'booking.gift.info',
    button: 'booking.gift.buy-now'
  }, {
    id: '4',
    background: '/assets/img/png/service-bg.png',
    title: 'booking.gift.four.title',
    info: 'booking.gift.info',
    button: 'booking.gift.buy-now'
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
  
  public getGiftCards(): Observable<IProductCard[]> {
    return of(gifts);
  }
  
}

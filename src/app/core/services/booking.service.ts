import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CART_GIFTS_KEY, CART_TIMESLOTS_KEY } from '@app/core/constants';
import { CoreStorageService } from '@app/core/services/core-storage.service';
import { IProduct, IBookingSlot, IDiscount, IService } from '@app/interfaces';


const mockProducts = [
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

const mockGifts = [
  {
    id: '1',
    title: '345D 4353 FF77 DFG5',
    price: '300'
  }, {
    id: '2',
    title: '345D 4353 FF77 DFG5',
    price: '500'
  }, {
    id: '3',
    title: '345D 4353 FF77 DFG5',
    price: '700'
  }, {
    id: '4',
    title: '345D 4353 FF77 DFG5',
    price: '1000'
  }
];

const mockBookingSlots = {
  productId: '1',
  dates: [
    {
      date: 'Fri Nov 11 2022',
      timeSlots: [
        { start: 12, end: 13 },
        { start: 14, end: 15 },
        { start: 16, end: 17 },
        { start: 18, end: 19 }
      ]
    }, {
      date: 'Fri Nov 12 2022',
      timeSlots: [
        { start: 12, end: 13 },
        { start: 14, end: 15 },
        { start: 16, end: 17 },
        { start: 18, end: 19 }
      ]
    }, {
      date: 'Fri Nov 13 2022',
      timeSlots: [
        { start: 12, end: 13 },
        { start: 14, end: 15 },
        { start: 16, end: 17 },
        { start: 18, end: 19 }
      ]
    }, {
      date: 'Fri Oct 11 2022',
      timeSlots: [
        { start: 12, end: 13 },
        { start: 14, end: 15 },
        { start: 16, end: 17 },
        { start: 18, end: 19 }
      ]
    }
  ]
};

const mockDiscounts = [
  { id: 'discount_1', name: 'header.test-discount', href: '/' },
  { id: 'discount_2', name: 'header.test-discount', href: '/' },
  { id: 'discount_3', name: 'header.test-discount', href: '/' }
];

const mockServices = [
  { id: 'service_1', name: 'header.test-service', href: '/' },
  { id: 'service_2', name: 'header.test-service', href: '/' },
  { id: 'service_3', name: 'header.test-service', href: '/' }
];

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(
    private storage: CoreStorageService
  ) { }

  public getProducts(): Observable<IProduct[]> {
    return of(mockProducts);
  }

  public getAvailableSlots(productId: string): Observable<any> {
    return of(mockBookingSlots);
  }

  public getGiftCards(): Observable<IProduct[]> {
    return of(mockGifts);
  }

  public getDiscountsList(): Observable<IDiscount[]> {
    return of(mockDiscounts);
  }

  public getServicesList(): Observable<IService[]> {
    return of(mockServices);
  }

  public addBookingSlotsToCart(currValue: IBookingSlot[]): Observable<boolean> {
    const prevValue = this.storage.get(CART_TIMESLOTS_KEY) || [];
    this.storage.set(
      CART_TIMESLOTS_KEY,
      [...prevValue, ...currValue]
    );
    return of(true);
  }

  public addGiftsToCart(currValue: any): Observable<boolean> {
    const prevValue = this.storage.get(CART_GIFTS_KEY) || [];
    this.storage.set(
      CART_GIFTS_KEY,
      [...prevValue, ...currValue]
    );
    return of(true);
  }

}

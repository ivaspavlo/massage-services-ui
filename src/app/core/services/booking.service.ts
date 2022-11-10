import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CART_GIFTS_KEY, CART_TIMESLOTS_KEY } from '@app/core/constants';
import { CoreStorageService } from '@app/core/services/core-storage.service';
import { IProduct, IBookingAvailable, IBookingSlot, IDiscount, IService } from '@app/interfaces';


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

const mockBookingData = [
  {
    month: 'September',
    dates: [
      {
        day: 1,
        uiName: '01.09',
        dateString: 'Tue Sep 01 2022',
        time: [
          { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
          { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
          { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
          { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } },
          { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
          { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
          { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
          { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } },
          { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
          { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
          { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
          { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
        ]
      }, {
        day: 2,
        uiName: '02.09',
        dateString: 'Tue Sep 02 2022',
        time: [
          { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
          { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
          { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
          { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
        ]
      }, {
        day: 3,
        uiName: '03.09',
        dateString: 'Tue Sep 03 2022',
        time: [
          { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
          { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
          { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
          { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
        ]
      }, {
        day: 4,
        uiName: '04.09',
        dateString: 'Tue Sep 04 2022',
        time: [
          { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
          { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
          { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
          { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
        ]
      }, {
        day: 5,
        uiName: '05.09',
        dateString: 'Tue Sep 05 2022',
        time: [
          { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
          { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
          { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
          { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
        ]
      }, {
        day: 6,
        uiName: '06.09',
        dateString: 'Tue Sep 06 2022',
        time: [
          { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
          { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
          { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
          { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
        ]
      }, {
        day: 7,
        uiName: '07.09',
        dateString: 'Tue Sep 07 2022',
        time: [
          { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
          { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
          { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
          { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
        ]
      }, {
        day: 8,
        uiName: '08.09',
        dateString: 'Tue Sep 08 2022',
        time: [
          { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
          { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
          { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
          { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
        ]
      }, {
        day: 9,
        uiName: '09.09',
        dateString: 'Tue Sep 09 2022',
        time: [
          { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
          { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
          { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
          { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
        ]
      }, {
        day: 10,
        uiName: '10.09',
        dateString: 'Tue Sep 10 2022',
        time: [
          { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
          { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
          { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
          { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
        ]
      }
    ]
  }
];

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

  public getAvailableSlots(): Observable<IBookingAvailable[]> {
    return of(mockBookingData);
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

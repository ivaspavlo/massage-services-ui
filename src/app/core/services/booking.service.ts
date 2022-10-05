import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct, IBooking, IBookingReq, IGift } from '@app/interfaces';


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
];

const bookingData = [
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

@Injectable({
  providedIn: 'root'
})
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

  public getAvailableDates(): Observable<IBooking[]> {
    return of(bookingData);
  }

  public confirmBooking(req: IBookingReq): Observable<any> {
    return of(true);
  }
  
}

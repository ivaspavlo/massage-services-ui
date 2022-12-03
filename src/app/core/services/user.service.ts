import { Injectable } from '@angular/core';
import { IBookingSlot, IUserProfile } from '@app/interfaces';
import { of, Observable } from 'rxjs';


const mockBookedSlots = [
  {
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
        date: 'Fri Oct 14 2022',
        timeSlots: [
          { start: 12, end: 13 },
          { start: 14, end: 15 },
          { start: 16, end: 17 },
          { start: 18, end: 19 }
        ]
      }
    ]
  }, {
    productId: '2',
    dates: [
      {
        date: 'Fri Nov 15 2022',
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
  }
];

const mockUserProfile = {
  firstName: 'Deaddy',
  lastName: 'Poolovich',
  email: 'deaddy_poolovich@ggg.com',
  phoneNumber: 'some number',
  birthDate: 'Tue Nov 22 2022 19:22:42'
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getUserProfileData(): Observable<IUserProfile> {
    return of(mockUserProfile);
  }

  public getBookedData(): Observable<IBookingSlot[]> {
    return of(mockBookedSlots);
  }

}

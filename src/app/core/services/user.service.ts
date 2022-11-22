import { Injectable } from '@angular/core';
import { IUserProfile } from '@app/interfaces';
import { of, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getUserProfileData(): Observable<IUserProfile> {
    return of({
      firstName: 'Deaddy',
      lastName: 'Poolovich',
      email: 'deaddy_poolovich@ggg.com',
      phoneNumber: 'some number',
      birthDate: 'Tue Nov 22 2022 19:22:42'
    });
  }

  public getBookedData(): Observable<any> {
    return of();
  }

}

import { Injectable } from '@angular/core';
import { UserService } from '@app/core/services';
import { Observable } from 'rxjs';
import { IBookingSlot } from '../booking/interfaces';
import { IUser } from './interfaces';


@Injectable()
export class ProfileFacade {

  constructor(
    private userService: UserService
  ) { }

  public getProfileData(): Observable<IUser> {
    return this.userService.getUserProfileData();
  }

  public getBookingData(): Observable<IBookingSlot[]> {
    return this.userService.getBookedData();
  }

  public updateProfileImg(value: string): Observable<boolean> {
    return this.userService.updateImage(value);
  }

}

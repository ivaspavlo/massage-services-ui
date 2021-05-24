
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookingService {
  
  constructor() { }
  
  public getBookingDataById(id: string): Observable<any> {
    return of(null);
  }
  
}

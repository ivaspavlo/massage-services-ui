import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BookingService } from '@app/core/services';
import { IProduct, IBookingSlot, IDatesGroup, IBookedSlot, IGiftSlot } from './interfaces';


@Injectable()
export class BookingFacade {
  
  constructor(
    private bookingService: BookingService,
    private datePipe: DatePipe
  ) { }

  public getProducts(): Observable<IProduct[]> {
    return this.bookingService.getProducts().pipe(
      catchError(() => of([]))
    );
  }
  
  public getGiftCards(): Observable<IProduct[]> {
    return this.bookingService.getGiftCards().pipe(
      catchError(() => of([]))
    );
  }

  public getAvailableSlots(productId: string): Observable<IDatesGroup[]> {
    return this.bookingService.getAvailableSlots(productId).pipe(
      catchError(() => of([])),
      map((value: any) => this.groupDatesByMonth(value))
    );
  }

  public addBookingSlotsToCart(value: IBookedSlot[]): void {
    return this.bookingService.addBookingSlotsToCart(value);
  }

  public addGiftsToCart(value: IGiftSlot): void {
    return this.bookingService.addGiftsToCart(value);
  }

  // PRIVATE METHODS

  private groupDatesByMonth(value: IBookingSlot): IDatesGroup[] {
    const groupedByMonthObj = value.dates.reduce((acc, curr) => {
      const item = { ...curr, date: new Date(curr.date) };
      const month = this.datePipe.transform(item.date, 'LLLL');
      if (acc[month]) {
        acc[month].push(item);
        return acc;
      } else {
        return {...acc, [month]: [item]}
      }
    }, {});
    const groupedByMonthArr = Object.keys(groupedByMonthObj).map((monthKey: string) => {
      return {month: monthKey, dates: groupedByMonthObj[monthKey]};
    });
    return groupedByMonthArr;
  }

}

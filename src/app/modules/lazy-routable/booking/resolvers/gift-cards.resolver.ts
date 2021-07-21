
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { IProductCard } from '@app/interfaces';

import { BookingService } from '../services/booking.service';


@Injectable()
export class GiftCardsResolver implements Resolve<IProductCard[]> {
  
  constructor(
    private bookingService: BookingService,
    private translateService: TranslateService
  ) { }

  resolve(): Observable<IProductCard[]> {
    return this.bookingService.getGiftCards().pipe(
      map((cards: IProductCard[]) => {
        return this.translateCards(cards);
      }),
      catchError(_ => of([]))
    );
  }
  
  private translateCards(cards: IProductCard[]): IProductCard[] {
    return cards.map(card => {
      return Object.keys(card).reduce((acc, key) => {
        return {
          ...acc,
          [key]: this.translateService.instant(card[key])
        };
      }, {} as IProductCard);
    });
  }

}

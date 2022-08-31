import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductCard } from '@app/interfaces';
import { BookingFacade } from '../../booking.facade';
import { IGift } from '../../interfaces/gift.interface';


@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GiftsComponent implements OnInit {
  
  public giftCards$: Observable<IGift[]>;

  constructor(
    private facade: BookingFacade
  ) { }

  ngOnInit(): void {
    this.giftCards$ = this.facade.getGiftCards();
  }
  
  public onClick(card: IProductCard): void { }
  
}

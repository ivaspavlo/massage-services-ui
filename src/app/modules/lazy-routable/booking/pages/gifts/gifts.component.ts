import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingFacade } from '../../booking.facade';
import { IGiftSlot, IProduct } from '../../interfaces';


@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GiftsComponent implements OnInit {

  public giftCards$: Observable<IProduct[]>;
  public currentlyClickedCard: IProduct;

  constructor(
    private facade: BookingFacade
  ) { }

  ngOnInit(): void {
    this.giftCards$ = this.facade.getGiftCards();
  }

  public onClickGiftCard(value: IProduct | null): void {
    this.currentlyClickedCard = value;
  }

  public onAddGiftCard(value: IGiftSlot): void {
    this.facade.addGiftsToCart(value);
  }

}

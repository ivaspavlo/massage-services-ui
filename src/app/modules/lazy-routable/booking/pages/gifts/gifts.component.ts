
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IProductCard } from '@app/interfaces';

import { GiftCards } from '../../constants/gift-cards.constant';


@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GiftsComponent implements OnInit {
  
  public giftCards: IProductCard[] = GiftCards;

  constructor() { }

  ngOnInit(): void { }

}

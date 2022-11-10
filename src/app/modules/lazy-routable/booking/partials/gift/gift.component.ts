import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../interfaces';


@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GiftComponent {

  @Input() gift: IProduct;
  @Input() currentlyClicked = false;
  @Output() giftClick: EventEmitter<IProduct> = new EventEmitter();

  public onGiftClick(): void {
    this.giftClick.emit(this.gift);
  }

}

import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { IGift } from '../../interfaces/gift.interface';


@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GiftComponent {

  @Input() gift: IGift;
  @Output() giftClick: EventEmitter<IGift> = new EventEmitter();

  public onGiftClick(): void {
    this.giftClick.emit(this.gift);
  }

}

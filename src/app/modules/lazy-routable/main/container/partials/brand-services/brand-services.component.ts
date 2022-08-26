import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IProductCard, IQuote } from '@app/interfaces';


@Component({
  selector: 'app-brand-services',
  templateUrl: './brand-services.component.html',
  styleUrls: ['./brand-services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandServicesComponent {

  @Input() productCards: IProductCard[];
  @Input() quotes: IQuote[];
  // TODO: create a separate component for quote modal
  @Output() showQuoteModal: EventEmitter<void> = new EventEmitter();

}

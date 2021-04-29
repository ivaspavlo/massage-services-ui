
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProductCard, IQuote } from '@app/interfaces';


@Component({
  selector: 'app-brand-services',
  templateUrl: './brand-services.component.html',
  styleUrls: ['./brand-services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandServicesComponent implements OnInit {

  @Input() productCards: IProductCard[];
  @Input() quotes: IQuote[];
  @Output() showQuoteModal: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

}

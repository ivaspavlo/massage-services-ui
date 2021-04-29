
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-brand-services',
  templateUrl: './brand-services.component.html',
  styleUrls: ['./brand-services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandServicesComponent implements OnInit {

  @Input() productCards: any[];
  @Input() quotes: any[];
  @Output() showQuoteModal: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

}

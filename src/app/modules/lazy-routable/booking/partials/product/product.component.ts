import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  @Input() product: any;
  
  public advantages: string[] = [
    'booking.reserve.advantage.approach',
    'booking.reserve.advantage.experience',
    'booking.reserve.advantage.methodics',
    'booking.reserve.advantage.prices',
    'booking.reserve.advantage.long-term',
    'booking.reserve.advantage.customers',
    'booking.reserve.advantage.garanty'
  ];

  constructor() { }

  ngOnInit(): void { }

}

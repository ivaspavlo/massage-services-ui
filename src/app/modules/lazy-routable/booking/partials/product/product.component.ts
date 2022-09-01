import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../interfaces';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  @Input() product: IProduct;
  @Output() bookProduct: EventEmitter<IProduct> = new EventEmitter();
  
  public advantages: string[] = [
    'booking.reserve.advantage.approach',
    'booking.reserve.advantage.experience',
    'booking.reserve.advantage.methodics',
    'booking.reserve.advantage.prices',
    'booking.reserve.advantage.garanty'
  ];

  constructor() { }

  ngOnInit(): void { }

  public onBookClick(): void {
    this.bookProduct.emit(this.product);
  }

}

import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Products } from '../../constants/products.constant';
import { IProduct } from '../../interfaces/product.interface';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReservationComponent {
  
  public products: IProduct[] = Products;
  
  constructor() { }

}

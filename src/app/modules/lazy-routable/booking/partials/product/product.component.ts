
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  
  @Input() product: IProduct = {
    id: '1',
    img: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    title: 'Some really cool massage',
    subtitle: 'Subtitle for some really cool massage',
    price: '100',
    url: '/booking/reservation/1',
  }

  constructor() { }

  ngOnInit(): void { }

}

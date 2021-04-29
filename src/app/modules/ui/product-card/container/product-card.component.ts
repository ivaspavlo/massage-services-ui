
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IProductCard } from '../interfaces';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {

  @Input() card: IProductCard;

  constructor() { }

  ngOnInit(): void { }

}

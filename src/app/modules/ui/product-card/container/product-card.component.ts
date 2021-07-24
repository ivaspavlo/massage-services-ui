
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { IProductCard } from '../interfaces';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {

  @Input() card: IProductCard = { id: '1', background: '/assets/img/png/service-bg.png', title: 'CARD1', info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', button: 'TEST' };
  @Output() cardClick: EventEmitter<IProductCard> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void { }

}


import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';


interface ICard {
  background: string;
  title: string;
  info: string;
  button?: string;
}

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {

  @Input() card: ICard;

  constructor() { }

  ngOnInit(): void { }

}

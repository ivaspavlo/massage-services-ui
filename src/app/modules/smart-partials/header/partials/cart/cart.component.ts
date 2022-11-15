import { Component, ChangeDetectionStrategy, Input } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['../../components/header/header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {

  @Input() isEmpty: boolean = true;

}

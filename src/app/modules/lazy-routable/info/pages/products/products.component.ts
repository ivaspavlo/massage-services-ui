import { Component, ChangeDetectionStrategy } from '@angular/core';
import { InfoService } from '../../services/info.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss', '../info-container/info-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {

  constructor(
    public infoService: InfoService
  ) { }

}

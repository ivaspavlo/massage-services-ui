import { Component, ChangeDetectionStrategy } from '@angular/core';
import { InfoService } from '../../services/info.service';


@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.scss', '../info-container/info-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscountsComponent {

  constructor(
    public infoService: InfoService
  ) { }

}

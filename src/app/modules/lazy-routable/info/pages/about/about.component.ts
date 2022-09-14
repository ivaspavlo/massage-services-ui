import { Component, ChangeDetectionStrategy } from '@angular/core';
import { InfoService } from '../../services/info.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', '../info-container/info-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {

  constructor(
    public infoService: InfoService
  ) { }

}

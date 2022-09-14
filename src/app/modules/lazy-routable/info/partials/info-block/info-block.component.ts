import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IInfo } from '../../interfaces';


@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['../../pages/info-container/info-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoBlockComponent {

  @Input() item: IInfo;

  constructor() { }

}

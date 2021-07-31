import { Component, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoModalComponent {

  constructor() { }

}

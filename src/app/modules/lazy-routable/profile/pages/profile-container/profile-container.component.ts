import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IDateTimePair } from '@app/interfaces';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileContainerComponent {
  
  public dateTimePairs: IDateTimePair[] = [
    { date: new Date(), timeSlot: { start: 10, end: 11 } },
    { date: new Date(), timeSlot: { start: 10, end: 11 } },
    { date: new Date(), timeSlot: { start: 10, end: 11 } }
  ];

  constructor() { }

}

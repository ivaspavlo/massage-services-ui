import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IDateTimePair, IProfileFormValue } from '@app/interfaces';

import { ProfileSections } from '../../constants';


@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileContainerComponent {
  
  public formDisabled = true;
  public profileSections = ProfileSections;
  public currentSection: string = ProfileSections.bookings;
  public initValue: IProfileFormValue = {
    name: 'string',
    surname: 'string',
    birthDate: '',
    email: 'string',
    phoneNumber: 'string'
  };
  
  public dateTimePairs: IDateTimePair[] = [
    { date: new Date(), timeSlot: { start: 10, end: 11 } },
    { date: new Date(), timeSlot: { start: 10, end: 11 } },
    { date: new Date(), timeSlot: { start: 10, end: 11 } }
  ];

  constructor() { }

  public onMenuButtonClick(section: string): void {
    this.currentSection = section;
  }
  
  public onButtonClick(currentValue: IProfileFormValue): void {
    if (this.formDisabled) {
      this.formDisabled = false;
      return;
    }
    if (this.hasChanged(this.initValue, currentValue)) {
      // TODO: to be implemented
    }
  }
  
  // Private methods
  
  private hasChanged(initValue: IProfileFormValue, currentValue: IProfileFormValue): boolean {
    return Object.keys(initValue).some(key => {
      return initValue[key] !== currentValue[key];
    });
  }
  
}

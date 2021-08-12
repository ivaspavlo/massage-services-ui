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
    birthDate: 'string',
    password: 'string',
    confirmPassword: 'string',
    email: 'string',
    phoneNumber: 'string'
  };
  private formValue: IProfileFormValue;
  
  public dateTimePairs: IDateTimePair[] = [
    { date: new Date(), timeSlot: { start: 10, end: 11 } },
    { date: new Date(), timeSlot: { start: 10, end: 11 } },
    { date: new Date(), timeSlot: { start: 10, end: 11 } }
  ];

  constructor() { }

  public onMenuButtonClick(section: string): void {
    this.currentSection = section;
  }
  
  public onEditProfile(): void {
    this.formDisabled = false;
  }
  
  public onSaveProfile(): void {
    const hasChanged = !!Object.keys(this.initValue || {}).find(key => {
      this.initValue[key] !== this.formValue[key];
    });
    if (hasChanged) {
      // TODO: to be implemented
    }
  }
  
  public onFormChange(formValue: IProfileFormValue): void {
    console.log(formValue);
    this.formValue = formValue;
  }
  
}

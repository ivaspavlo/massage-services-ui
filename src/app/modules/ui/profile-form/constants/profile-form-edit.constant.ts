import { FormControl } from '@angular/forms';
import { IProfileFormValue } from '../interfaces';
import { ProfileFormSettings } from './profile-form-settings.constant';

const excludeFields = ['password', 'confirmPassword', 'consent'];

export class ProfileFormEdit {
  constructor(initValue: IProfileFormValue | null) {
    ProfileFormSettings
      .filter(ctrl => !excludeFields.includes(ctrl.name))
      .forEach(ctrl => {
        this[ctrl.name] = new FormControl(
          { value: initValue && initValue[ctrl.name] ? initValue[ctrl.name] : '', disabled: true },
          ctrl.validators
        );
      });
  }
}

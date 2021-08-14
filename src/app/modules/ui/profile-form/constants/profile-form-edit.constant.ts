import { FormControl } from '@angular/forms';
import { IProfileFormValue } from '../interfaces';
import { ProfileFormSettings } from './profile-form-settings.constant';


export class ProfileFormEdit {
  constructor(initValue: IProfileFormValue | null) {
    debugger;
    ProfileFormSettings
      .filter(ctrl => ctrl.name !== 'password' && ctrl.name !== 'confirmPassword')
      .forEach(ctrl => {
        debugger
        this[ctrl.name] = new FormControl(
          { value: initValue ? initValue[ctrl.name] : '', disabled: true },
          ctrl.validators
        );
      });
  }
}

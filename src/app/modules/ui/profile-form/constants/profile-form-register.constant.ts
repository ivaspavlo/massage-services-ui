import { FormControl } from '@angular/forms';
import { IProfileFormValue } from '../interfaces';
import { ProfileFormSettings } from './profile-form-settings.constant';


export class ProfileFormRegister {
  constructor(initValue: IProfileFormValue | null) {
    ProfileFormSettings.forEach(ctrl => {
      this[ctrl.name] = new FormControl(
        { value: initValue ? initValue[ctrl.name] : '', disabled: false },
        ctrl.validators
      );
    });
  }
}

import { FormControl } from '@angular/forms';
import { IProfileFormValue } from '../interfaces';
import { Validators } from '@angular/forms';
import { DateValidators, PasswordValidators } from '@app/shared/validators';

const formSettings = [
  { name: 'firstName', validators: [Validators.required] },
  { name: 'lastName', validators: [Validators.required] },
  { name: 'birth', validators: [Validators.required, DateValidators.birthDate] },
  { name: 'email', validators: [Validators.required, Validators.email] },
  { name: 'phone', validators: [Validators.required, Validators.minLength(12)] },
  { name: 'password', validators: [PasswordValidators.default] },
  { name: 'confirmPassword', validators: [PasswordValidators.default, PasswordValidators.passwordsEqual()] }
];

export class ProfileFormEdit {
  constructor(initValue: IProfileFormValue | null) {
    formSettings.forEach(ctrl => {
        this[ctrl.name] = new FormControl(
          { value: initValue && initValue[ctrl.name] ? initValue[ctrl.name] : '', disabled: true },
          ctrl.validators
        );
      });
  }
}

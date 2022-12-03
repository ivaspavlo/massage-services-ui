import { FormControl } from '@angular/forms';
import { IProfileFormValue } from '../interfaces';
import { Validators } from '@angular/forms';
import { DateValidators, PasswordValidators } from '@app/shared/validators';

const formSettings = [
  { name: 'firstName', validators: [Validators.required] },
  { name: 'lastName', validators: [Validators.required] },
  { name: 'birthDate', validators: [Validators.required, DateValidators.birthDate] },
  { name: 'email', validators: [Validators.required, Validators.email] },
  { name: 'phoneNumber', validators: [Validators.required, Validators.minLength(12)] },
  { name: 'password', validators: [Validators.required, PasswordValidators.default] },
  { name: 'confirmPassword', validators: [Validators.required, PasswordValidators.default, PasswordValidators.passwordsEqual()] },
  { name: 'consent', Validators: [Validators.requiredTrue] }
];

export class ProfileFormRegister {
  constructor(initValue?: IProfileFormValue) {
    formSettings.forEach(ctrl => {
      this[ctrl.name] = new FormControl(
        { value: initValue ? initValue[ctrl.name] : '', disabled: false },
        ctrl.validators
      );
    });
  }
}

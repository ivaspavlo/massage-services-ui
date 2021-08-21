import { Validators } from '@angular/forms';
import { DateValidators, PasswordValidators } from '@app/shared/validators';


export const ProfileFormSettings = [
  { name: 'name', validators: [Validators.required] },
  { name: 'surname', validators: [Validators.required] },
  { name: 'birthDate', validators: [Validators.required, DateValidators.birthDate] },
  { name: 'email', validators: [Validators.required, Validators.email] },
  { name: 'phoneNumber', validators: [Validators.required, Validators.minLength(12)] },
  { name: 'password', validators: [Validators.required, PasswordValidators.default] },
  { name: 'confirmPassword', validators: [Validators.required, PasswordValidators.default, PasswordValidators.passwordsEqual()] }
];

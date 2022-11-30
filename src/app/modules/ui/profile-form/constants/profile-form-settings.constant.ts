import { Validators } from '@angular/forms';
import { DateValidators, PasswordValidators } from '@app/shared/validators';


export const ProfileFormSettings = [
  { name: 'firstName', validators: [Validators.required] },
  { name: 'lastName', validators: [Validators.required] },
  { name: 'birthDate', validators: [Validators.required, DateValidators.birthDate] },
  { name: 'email', validators: [Validators.required, Validators.email] },
  { name: 'phoneNumber', validators: [Validators.required, Validators.minLength(12)] },
  { name: 'password', validators: [Validators.required, PasswordValidators.default] },
  { name: 'confirmPassword', validators: [Validators.required, PasswordValidators.default, PasswordValidators.passwordsEqual()] },
  { name: 'consent', Validators: [Validators.requiredTrue] }
];

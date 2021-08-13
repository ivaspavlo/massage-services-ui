import { Validators } from '@angular/forms';
import { DateValidators, PasswordValidators } from '@app/shared/validators';
import { IProfileFormValue } from '../interfaces';


export class ProfileFormBase {
  public name = { value: '', validators: [Validators.required] };
  public surname = { value: '', validators: [Validators.required] };
  public birthDate = { value: '', validators: [Validators.required, DateValidators.default] };
  public password = { value: '', validators: [Validators.required, PasswordValidators.default] };
  public confirmPassword = { value: '', validators: [Validators.required, PasswordValidators.default, PasswordValidators.passwordsEqual()] };
  public email = { value: '', validators: [Validators.required, Validators.email] };
  public phoneNumber = { value: '', validators: [Validators.required, Validators.minLength(12)] };
  
  constructor(initValue: IProfileFormValue) {
    debugger;
    Object.keys(initValue).forEach(key => {
      this[key] = { ...this[key], value: initValue[key] };
    });
  }
}

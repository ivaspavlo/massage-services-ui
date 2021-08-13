import { ValidatorFn } from '@angular/forms';


export interface IProfileFormValue {
  name: string;
  surname: string;
  birthDate: string;
  password: string;
  confirmPassword: string;
  email: string;
  phoneNumber: string;
}

export interface IFormBase {
  [key: string]: { validators: ValidatorFn[], value: unknown }
}

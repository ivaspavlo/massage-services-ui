
import { AbstractControl } from '@angular/forms';


export class DateValidators {
  
  static default(control: AbstractControl): any | null {
    const error = { date: true };
    const value = control.value;
    // XX/XX/XXXX
    if (value.length < 10) {
      return error;
    }
    const [day, month, year] = value.split('/');
    const date = new Date(year, month, day);
    const now = new Date();
    if (month > 12 || day > 31 || year < 1920 || date > now) {
      return error;
    }
  }
  
}

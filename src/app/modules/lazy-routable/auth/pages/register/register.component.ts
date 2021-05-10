
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  
  public form: FormGroup;
  public phoneNumberPattern = '^((\\+91-?)|0)?[0-9]{10}$';

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.initForm();
  }
  
  public onSubmit(): void { }
  
  private initForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control('', Validators.required),
      surname: this.fb.control('', Validators.required),
      userName: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
      confirmPassword: this.fb.control('', [Validators.required, this.checkPasswordsValidator()]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      phoneNumber: this.fb.control('', Validators.required),
      consent: this.fb.control('', Validators.requiredTrue)
    });
  }
  
  private checkPasswordsValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      const formGroup = control.parent;
      if (!formGroup) {
        return null;
      }
      const passwordValue = control.parent.get('password').value;
      const confirmPasswordValue = control.value;
      return passwordValue !== confirmPasswordValue && (control.dirty || control.touched) ? { notSame: true } : null;
    }
  }

}

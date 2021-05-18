
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorMessages } from '@app/core/constants';
import { AuthService } from '@app/core/services';
import { DateValidators, PasswordValidators } from '@app/shared/validators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  
  public form: FormGroup;
  public errorMessages = ErrorMessages;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.form = this.initForm();
  }
  
  public onSubmit(): void {
    this.authService.signup({ userName: 'asdfasdf', password: 'asdfa111A1' }).subscribe(res => {
      console.log(res);
    })
  }
  
  private initForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control('', Validators.required),
      surname: this.fb.control('', Validators.required),
      birthDate: this.fb.control('', [Validators.required, DateValidators.default]),
      password: this.fb.control('', [Validators.required, PasswordValidators.default]),
      confirmPassword: this.fb.control('', [Validators.required, PasswordValidators.default, PasswordValidators.passwordsEqual()]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      phoneNumber: this.fb.control('', [Validators.required, Validators.minLength(12)]),
      // consent: this.fb.control('', Validators.requiredTrue)
    });
  }

}

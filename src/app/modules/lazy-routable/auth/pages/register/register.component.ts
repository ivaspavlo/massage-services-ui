
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from '@app/shared/validators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  
  public form: FormGroup;

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
      password: this.fb.control('', [Validators.required, PasswordValidators.default]),
      confirmPassword: this.fb.control('', [Validators.required, PasswordValidators.default]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      phoneNumber: this.fb.control('', Validators.required),
      consent: this.fb.control('', Validators.requiredTrue)
    });
  }

}

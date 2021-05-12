
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from '@app/shared/validators';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResetPasswordComponent implements OnInit {

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
      password: this.fb.control('', [Validators.required, Validators.email]),
      confirmPassword: this.fb.control('', [Validators.required, PasswordValidators.default]),
    });
  }

}

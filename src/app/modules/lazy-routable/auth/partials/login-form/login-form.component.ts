import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from '@app/shared/validators';


export interface ILoginFormValue {
  login: string;
  password: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {
  
  @Input() errorsMap: {[key:string]: string;} = {};

  @Output() submit: EventEmitter<ILoginFormValue> = new EventEmitter();
  public form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.createForm();
  }
  
  public onSubmit(): void {
    this.submit.emit(this.form.value);
  }
  
  private createForm(): FormGroup {
    return this.fb.group({
      password: ['', [Validators.required, PasswordValidators.default]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

}

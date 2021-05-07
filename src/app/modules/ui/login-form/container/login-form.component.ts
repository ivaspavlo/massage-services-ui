
import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ILoginFormValue } from '../interfaces';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {

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
      password: ['', Validators.required],
      login: ['', Validators.required]
    });
  }

}

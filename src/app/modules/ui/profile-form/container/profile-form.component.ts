import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ErrorMessages } from '@app/core/constants';
import { DateValidators, PasswordValidators } from '@app/shared/validators';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { IProfileFormValue } from '../interfaces';


@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileFormComponent implements OnInit {
  
  @Input() formValue: IProfileFormValue;
  @Input() title: string;
  @Input() set disabled(value: boolean) {
    this._disabled = value;
    this.toggleDisableForm(value);
  };
  @Output() formChange: EventEmitter<IProfileFormValue> = new EventEmitter();
  
  public form: FormGroup;
  public errorMessages = ErrorMessages;
  private componentDestroyed$: Subject<void> = new Subject();
  private _disabled = false;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    debugger;
    this.form = this.initForm();
    this.listenToFormChange();
  }
  
  public listenToFormChange(): void {
    this.form.valueChanges.pipe(
      takeUntil(this.componentDestroyed$)
    ).subscribe((res: IProfileFormValue) => {
      this.formChange.emit(res);
    });
  }
  
  private initForm(): FormGroup {
    debugger;
    return this.fb.group({
      name: this.fb.control({ value: this.formValue ? this.formValue.name : '', disabled: this._disabled }, Validators.required),
      surname: this.fb.control({ value: this.formValue ? this.formValue.surname : '',  disabled: this._disabled }, Validators.required),
      birthDate: this.fb.control({ value: this.formValue ? this.formValue.birthDate : '', disabled: this._disabled }, [Validators.required, DateValidators.default]),
      password: this.fb.control({ value: this.formValue ? this.formValue.password : '', disabled: this._disabled }, [Validators.required, PasswordValidators.default]),
      confirmPassword: this.fb.control({ value: this.formValue ? this.formValue.confirmPassword : '', disabled: this._disabled }, [Validators.required, PasswordValidators.default, PasswordValidators.passwordsEqual()]),
      email: this.fb.control({ value: this.formValue ? this.formValue.email : '', disabled: this._disabled }, [Validators.required, Validators.email]),
      phoneNumber: this.fb.control({ value: this.formValue ? this.formValue.phoneNumber : '', disabled: this._disabled }, [Validators.required, Validators.minLength(12)])
    });
  }
  
  private toggleDisableForm(value: boolean): void {
    if (!this.form) {
      return;
    }
    Object.keys(this.form.controls).forEach(key => {
      value ?
        this.form.controls[key].disable() :
        this.form.controls[key].enable();
    });
  }

}

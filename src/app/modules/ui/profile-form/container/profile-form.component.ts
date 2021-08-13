import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ErrorMessages } from '@app/core/constants';
import { DateValidators, PasswordValidators } from '@app/shared/validators';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProfileFormBase } from '../constants';

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
    const test = new ProfileFormBase(this.formValue);
    debugger;
    return this.fb.group(
      test
    );
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

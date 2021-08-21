import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ErrorMessages } from '@app/core/constants';

import { ProfileFormRegister, ProfileFormEdit } from '../constants';
import { IProfileFormValue } from '../interfaces';


@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileFormComponent implements OnInit {
  
  @Output() buttonClick: EventEmitter<IProfileFormValue> = new EventEmitter();
  
  @Input() initValue: IProfileFormValue;
  @Input() title: string;
  @Input() set disabled(value: boolean) {
    this.isDisabled = value;
    this.toggleDisableForm(value);
  };
  
  get isEditMode(): boolean { return !!this.initValue; }
  
  public form: FormGroup;
  public errorMessages = ErrorMessages;
  private isDisabled = false;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.initForm();
    this.toggleDisableForm(this.isDisabled);
  }
  
  private initForm(): FormGroup {
    return this.fb.group(
      this.isEditMode ?
        new ProfileFormEdit(this.initValue) :
        new ProfileFormRegister()
    );
  }
  
  private toggleDisableForm(value: boolean): void {
    if (!this.form) {
      return;
    }
    Object.keys(this.form.controls).forEach(key => {
      value ?
        this.form.controls[key].disable({ onlySelf: true, emitEvent: false }) :
        this.form.controls[key].enable({ onlySelf: true, emitEvent: false });
    });
  }

}

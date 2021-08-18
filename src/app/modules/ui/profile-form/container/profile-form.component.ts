import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';

import { ErrorMessages } from '@app/core/constants';
import { DestroySubscriptions } from '@app/shared/classes';

import { ProfileFormRegister, ProfileFormEdit } from '../constants';
import { IProfileFormValue } from '../interfaces';


@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileFormComponent extends DestroySubscriptions implements OnInit {
  
  @Output() formChange: EventEmitter<IProfileFormValue> = new EventEmitter();
  
  @Input() initValue: any = {};
  @Input() title: string;
  @Input() set disabled(value: boolean) {
    this.toggleDisableForm(value);
  };
  
  get isEditMode(): boolean { return !!this.initValue; }
  
  public form: FormGroup;
  public errorMessages = ErrorMessages;

  constructor(
    private fb: FormBuilder
  ) { super(); }

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


import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAngularMyDpOptions } from 'angular-mydatepicker';

import { DestroySubscriptions } from '@app/shared/classes';
import { map, takeUntil } from 'rxjs/operators';

import { IDateTimePair, ITimeSlot } from '../../interfaces';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppointmentComponent extends DestroySubscriptions implements OnInit {
  
  public form: FormGroup = null;
  public dpOptions: IAngularMyDpOptions = {
    disableWeekends: true,
    dateRange: false,
    dateFormat: 'dd.mm.yyyy',
    disableUntil: { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() }
  };
  public timeSlots: ITimeSlot[] = [];
  public pairs: IDateTimePair[] = [];

  constructor(
    private fb: FormBuilder
  ) { super(); }

  ngOnInit(): void {
    this.form = this.initForm();
    this.listenToDateChange();
  }
  
  public onAddPair(timeSlot: ITimeSlot): void {
    this.pairs = [
      ...this.pairs,
      { ...this.form.value, timeSlot }
    ];
  }
  
  public onDeletePair(index: number): void {
    this.pairs = this.pairs.filter((_, i) => i !== index);
  }
  
  private initForm(): FormGroup {
    return this.fb.group({
      date: this.fb.control('', [Validators.required])
    });
  }
  
  private listenToDateChange(): void {
    this.form.valueChanges.pipe(
      map((res: { date: Date | null }) => res.date),
      takeUntil(this.componentDestroyed$)
    ).subscribe((date: Date | null) => {
      // TODO: req to be implemented
      console.log(date);
      this.timeSlots = !date ?
        [] : [
          { start: 10, end: 11 },
          { start: 12, end: 13 },
          { start: 14, end: 15 },
          { start: 16, end: 17 },
          { start: 19, end: 20 }
        ];
    });
  }

}

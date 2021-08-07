import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { IDateTimePair } from '../interfaces';


@Component({
  selector: 'app-date-time-card',
  templateUrl: './date-time-card.component.html',
  styleUrls: ['./date-time-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateTimeCardComponent {
  
  @Input() pair: IDateTimePair;
  @Output() closePair: EventEmitter<IDateTimePair> = new EventEmitter();

  constructor() { }

}

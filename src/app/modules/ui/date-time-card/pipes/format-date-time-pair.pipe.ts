import { PipeTransform, Pipe } from '@angular/core';
import { IDateTimePair } from '../interfaces';


@Pipe({
  name: 'formatDateTime'
})
export class FormatDateTimePipe implements PipeTransform {
  transform(value: IDateTimePair): { date: string; time: string; } {
    return {
      date: `${value.date.getDate()}.${value.date.getMonth() + 1}.${value.date.getFullYear()}`,
      time: `${value.timeSlot.start}:00-${value.timeSlot.end}:00`
    };
  }
}

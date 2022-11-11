import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { IDateSlot, ITimeSlot } from '../interfaces';


@Pipe({
  name: 'groupByMonth'
})
export class GroupByMonthPipe  implements PipeTransform {

  constructor(
    private datePipe: DatePipe
  ) { }

  transform(value: IDateSlot[]): { month: string; dates: { date: Date; timeSlots: ITimeSlot[] }[] }[] {
    if (!Array.isArray(value)) {
      return [];
    }
    const monthDates = value.reduce((acc, curr) => {
      const item = { ...curr, date: new Date(curr.date) };
      const month = this.datePipe.transform(item.date, 'LLLL');
      if (acc[month]) {
        acc[month].push(item);
        return acc;
      } else {
        return {...acc, [month]: [item]}
      }
    }, {});
    return Object.keys(monthDates).map((monthKey: string) => {
      return {month: monthKey, dates: monthDates[monthKey]};
    });
  }

}

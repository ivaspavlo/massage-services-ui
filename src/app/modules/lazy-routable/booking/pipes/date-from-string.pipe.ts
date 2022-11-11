import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'dateFromString'
})
export class DateFromStringPipe implements PipeTransform {
  transform(value: string): Date {
    if (typeof value === 'string') {
      return new Date(value);
    }
  }
}

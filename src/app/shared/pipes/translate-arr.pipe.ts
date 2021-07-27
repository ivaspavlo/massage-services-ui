import { PipeTransform, Pipe } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { forkJoin, Observable, of } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';


@Pipe({
  name: 'translateArr'
})
export class TranslateArrPipe implements PipeTransform {
  
  constructor(
    private translateService: TranslateService
  ) { }
  
  transform(data: unknown[]): Observable<unknown[]> {
    if (!Array.isArray(data)) {
      return of(data);
    }
    return this.translateService.onLangChange.pipe(
      startWith(null),
      map(_ => data.map(i => this.translate(i))),
      switchMap(translations$ => forkJoin(translations$))
    );
  }
  
  private getArrayOfKeys(data: object): string[] | null {
    if (typeof data !== 'object') {
      return null;
    }
    return Object.keys(data).map(key => {
      return typeof data[key] === 'string' ? data[key] : null;
    });
  }
  
  private translate(data: object): Observable<object> {
    const keysArr = this.getArrayOfKeys(data);
    if (!keysArr) {
      return of(data);
    }
    return this.translateService.get(keysArr).pipe(
      map((translated: string[]) => {
        return Object.keys(data).reduce((acc, key) => {
          const value = typeof data[key] === 'string' ? translated[data[key]] : data[key];
          return {
            ...acc,
            [key]: value
          }
        }, {});
      })
    );
  }
  
}

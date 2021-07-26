import { PipeTransform, Pipe } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { forkJoin, Observable, of } from 'rxjs';
import { map, startWith, switchMap, tap } from 'rxjs/operators';


@Pipe({
  name: 'translateArr'
})
export class TranslateArrPipe implements PipeTransform {
  
  constructor(
    private translateService: TranslateService
  ) { }
  
  transform<T>(data: T): Observable<T> {
    if (!Array.isArray(data)) {
      return of(data);
    }
    const test = data.map(i => this.translate(i));
    debugger;
    return this.translateService.onDefaultLangChange.pipe(
      startWith(null),
      tap(res => {
        debugger;
      }),
      switchMap(_ => forkJoin(...test))
    );
  }
  
  private getArrayOfKeys(data) {
    return Object.keys(data).map(key => {
      return typeof data[key] === 'string' ? data[key] : null;
    });
  }
  
  private translate<T>(data: T): Observable<T> {
    debugger;
    const keysArr = this.getArrayOfKeys(data);
    return this.translateService.get(keysArr).pipe(
      map((translated: string[]) => {
        return Object.keys(data).reduce((acc, key) => {
          const value = typeof data[key] === 'string' ? translated[data[key]] : data[key];
          return {
            ...acc,
            [key]: value
          }
        }, {} as T);
      })
    );
  }
  
}

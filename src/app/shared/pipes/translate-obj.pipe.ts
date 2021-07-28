import { PipeTransform, Pipe } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Observable, of } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';


@Pipe({
  name: 'translateObj'
})
export class TranslateObjPipe implements PipeTransform {
  
  constructor(
    private translateService: TranslateService
  ) { }
  
  transform<T>(data: T): Observable<T> {
    if (typeof data !== 'object') {
      return of(data);
    }
    const keysArr = this.getArrayOfKeys(data);
    return this.translateService.onLangChange.pipe(
      startWith(null),
      switchMap(_ => this.translate(data, keysArr))
    );
  }
  
  private getArrayOfKeys(data) {
    return Object.keys(data).map(key => {
      return typeof data[key] === 'string' ? data[key] : null;
    });
  }
  
  private translate<T>(data: T, keysArr: string | null[]): Observable<T> {
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

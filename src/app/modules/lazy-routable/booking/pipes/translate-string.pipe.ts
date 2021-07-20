
import { PipeTransform, Pipe } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Pipe({
  name: 'translateStringVal'
})
export class TranslateStringValPipe implements PipeTransform {
  
  constructor(
    private translateService: TranslateService
  ) { }
  
  transform(data: object[]): object[] {
    return data.map(value => {
      return typeof value === 'object' ?
        this.translateStringVal(value) :
        value
    });
  }
  
  private translateStringVal(value: object): object {
    return Object.keys(value).reduce((acc, key) => {
      const test = this.translateService.getTranslation('en');
      let tost;
      if (typeof value[key] === 'string') {
        tost = this.translateService.instant(value[key]);
      } else {
        tost = value[key];
      }
      debugger;
      return {
        ...acc,
        [key]: typeof value[key] === 'string' ?
          this.translateService.instant(value[key]) :
          value[key]
      };
    }, {});
  }
}

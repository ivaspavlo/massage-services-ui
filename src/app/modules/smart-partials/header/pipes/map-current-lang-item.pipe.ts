import { PipeTransform, Pipe } from '@angular/core';
import { ILanguageBarItem } from '@app/modules/ui/language-bar/interfaces';


@Pipe({
  name: 'mapCurrentLangItem'
})
export class MapCurrentLangItemPipe implements PipeTransform {
  transform(value: string): ILanguageBarItem {
    debugger;
    if (typeof value !== 'string') {
      return value;
    }
    return {
      id: value,
      name: value.toUpperCase()
    };
  }
}

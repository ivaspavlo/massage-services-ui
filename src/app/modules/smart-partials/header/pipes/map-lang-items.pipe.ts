import { PipeTransform, Pipe } from '@angular/core';
import { ILanguageBarItem } from '@app/modules/ui/language-bar/interfaces';


@Pipe({
  name: 'mapLangItems'
})
export class MapLangItemsPipe implements PipeTransform {
  transform(value: object): ILanguageBarItem[] {
    if (typeof value !== 'object') {
      return value;
    }
    return Object.keys(value).map(key => ({ id: value[key], name: key.toUpperCase() }))
  }
}

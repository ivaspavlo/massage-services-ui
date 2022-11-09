import { Injectable }  from '@angular/core';
import { CoreStorageService } from './core/services/core-storage.service';
import { CoreTranslateService } from './core/services/core-translate.service';
import { LANG_ID_KEY, SupportedLang } from './core/constants';


@Injectable({
  providedIn: 'root'
})
export class AppInitService {
 
  constructor(
    private translate: CoreTranslateService,
    private storage: CoreStorageService
  ) { }
  
  public init(): Promise<unknown> {
    return Promise.all([
      this.setTranslations()
    ]);
  }
  
  private setTranslations(): Promise<unknown> {
    const savedLang = this.storage.get(LANG_ID_KEY);
    const initLang = savedLang || SupportedLang.ua;
    if (!savedLang) {
      this.storage.set(LANG_ID_KEY, initLang);
    }
    return this.translate.use(initLang).toPromise();
  }
  
}

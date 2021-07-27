import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { IHeaderDropdownMenu, IUser } from '@app/interfaces';
import { CoreTranslateService } from '@app/core/services';
import { SupportedLang } from '@app/core/constants';

import { MAIN_MENU_ITEMS, USER_ICON, USER_MENU_ITEMS } from '../constants';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  
  @Input() shrinked: boolean = false;
  
  public desktopMenuItems: IHeaderDropdownMenu[];
  public mobileMenuItems: IHeaderDropdownMenu[];
  public langMenuItems = SupportedLang;
  public currentLang$: Observable<string>;
  public isOpen = false;
  
  private user: IUser = null;
  
  constructor(
    private translateService: CoreTranslateService
  ) { }

  ngOnInit(): void {
    // TODO: user logic to be implemented
    this.desktopMenuItems = this.getDesktopItems();
    this.mobileMenuItems = this.getMobileItems();
    this.currentLang$ = this.translateService.getCurrentLang();
  }
  
  public onLanguageChange(lang: string): void {
    // TODO: test
    // const popoverRef = this.popoverService.open({
    //   origin,
    //   content: tpl,
    //   data: { skills: [1, 2, 3] }
    // });
    // popoverRef.afterClosed$.subscribe(res => console.log('works'));
    
    this.translateService.use(lang);
  }

  private getDesktopItems(): IHeaderDropdownMenu[] {
    const userMenu = {
      name: '',
      icon: USER_ICON,
      href: this.user ? '/user': null,
      items: this.user ? []: USER_MENU_ITEMS
    };
    return [ ...MAIN_MENU_ITEMS, userMenu ];
  }
  
  private getMobileItems(): IHeaderDropdownMenu[] {
    return this.user ?
      [...MAIN_MENU_ITEMS, { name: 'User', href: '/user' }] :
      [...MAIN_MENU_ITEMS, ...USER_MENU_ITEMS];
  }

}

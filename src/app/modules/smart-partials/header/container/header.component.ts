
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IHeaderDropdownMenu, IUser } from '@app/interfaces';
import { MAIN_MENU_ITEMS, USER_MENU_ITEMS, USER_ICON } from '../constants';


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
  public isOpen = false;
  
  private user: IUser = null;
  
  constructor(
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
    // Logic for fetching user is to be implemented
    this.desktopMenuItems = this.getDesktopItems();
    this.mobileMenuItems = this.getMobileItems();
  }
  
  public onLanguageChange(lang: string): void {
    this.translateService.setDefaultLang(lang);
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

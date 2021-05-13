
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IHeaderDropdownMenu } from '@app/interfaces';
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
  
  private user = null;
  
  constructor() { }

  ngOnInit(): void {
    this.desktopMenuItems = this.getDesktopItems(this.user);
    this.mobileMenuItems = this.getMobileItems(this.user);
  }
  
  private getDesktopItems(user: any): IHeaderDropdownMenu[] {
    return user ?
      [...MAIN_MENU_ITEMS, { name: this.user.name, href: '/user', icon: USER_ICON }] :
      [...MAIN_MENU_ITEMS, { name: 'User', icon: USER_ICON, items: USER_MENU_ITEMS }];
  }
  
  private getMobileItems(user: any): IHeaderDropdownMenu[] {
    return user ?
      [...MAIN_MENU_ITEMS, { name: 'User', href: '/user' }] :
      [...MAIN_MENU_ITEMS, ...USER_MENU_ITEMS];
  }

}

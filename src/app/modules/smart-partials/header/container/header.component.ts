
import { Component, OnInit, ChangeDetectionStrategy, Input, ElementRef } from '@angular/core';
import { IHeaderDropdownMenu } from '@app/interfaces';

import { MAIN_MENU_ITEMS, USER_MENU_ITEMS, USER_ICON } from '../constants';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Input() scrollable: HTMLElement;
  public isShrinked = false;

  public menuItems: IHeaderDropdownMenu[] = MAIN_MENU_ITEMS;
  public isOpen = false;
  public get userMenuSettings() {
    return {
      title: this.user?.name || 'User',
      href: this.user ? '/user' : null,
      icon: USER_ICON,
      items: this.user ? null : USER_MENU_ITEMS
    }
  };
  private user = null;

  constructor() { }

  ngOnInit(): void {
    this.scrollable.addEventListener('scroll', () => {
      console.log('works');
    });
  }

}

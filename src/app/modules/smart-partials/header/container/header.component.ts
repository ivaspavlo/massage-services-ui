import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';

import { IUser } from '@app/interfaces';
import { CoreTranslateService, UserService } from '@app/core/services';
import { SupportedLang } from '@app/core/constants';

import { MAIN_MENU_ITEMS, USER_MENU_ITEMS } from '../constants';
import { IDiscount, IHeaderDropdownMenu, IService } from '../interfaces';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  
  @Input() shrinked: boolean = false;

  @ViewChild('panel', {static: true}) panel: ElementRef;

  public mobileMenuItems: IHeaderDropdownMenu[];
  public userMenuItems: { href: string; name: string; }[] = USER_MENU_ITEMS;
  public langMenuItems = SupportedLang;

  public currentLang$: Observable<string>;
  public services$: Observable<IService[]>;
  public discounts$: Observable<IDiscount[]>;

  public isOpen = false;
  public set user(value: IUser) {
    this._user = value;
    this.mobileMenuItems = this.getMobileItems();
  };
  public get user() {
    return this._user;
  }

  private _user: IUser = null;
  
  constructor(
    private translateService: CoreTranslateService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.mobileMenuItems = this.getMobileItems();
    this.currentLang$ = this.translateService.getCurrentLang();
    this.services$ = this.userService.getServicesList();
    this.discounts$ = this.userService.getDiscountsList();
  }
  
  public onLanguageChange(lang: string): void {
    this.translateService.use(lang);
  }

  public onMobileMenuToggle(value: boolean): void {
    this.isOpen = value;
  }

  private getMobileItems(): IHeaderDropdownMenu[] {
    const mobileItems = this.user ?
      [...MAIN_MENU_ITEMS, { name: 'User', href: '/user' }] :
      [...MAIN_MENU_ITEMS, ...USER_MENU_ITEMS];
    return mobileItems.map(i => ({ ...i, name: this.translateService.instant(i.name) }));
  }

}

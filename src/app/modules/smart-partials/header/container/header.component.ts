
import { DOCUMENT } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, Inject, Input } from '@angular/core';

import { fromEvent, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { IHeaderDropdownMenu } from '@app/interfaces';

import { MAIN_MENU_ITEMS, USER_MENU_ITEMS, USER_ICON } from '../constants';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  
  @Input() scrollable: HTMLElement = null;
  @Input() public set shrinked(value: boolean) {
    this._shrinked = value;
  };
  public get isShrinked() {
    return this._shrinked;
  };
  public get userMenuSettings() {
    return {
      title: this.user?.name || 'User',
      href: this.user ? '/user' : null,
      icon: USER_ICON,
      items: this.user ? null : USER_MENU_ITEMS
    }
  };
  
  private _shrinked;
  private user = null;
  
  public menuItems: IHeaderDropdownMenu[] = MAIN_MENU_ITEMS;
  public isSchrinked$: Observable<boolean> = null;
  public isOpen = false;

  
  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    if (this.shrinked === undefined) {
      this._shrinked = false;
      this.listenToScrollEvent(this.scrollable || this.document.body, this._shrinked);
    }
  }
  
  private listenToScrollEvent(element: HTMLElement, init?: boolean): void {
    fromEvent(element, 'scroll').pipe(
      startWith(init),
      map((event) => {
        // TODO: implement if required
        return false;
      })
    ).subscribe((res: boolean) => {
      this._shrinked = res;
    });
  }

}


import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { IProductCard, ITab } from '@app/interfaces';

import { GiftCards } from '../../constants/gift-cards.constant';
import { Tabs } from '../../constants/tabs.constant';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingComponent implements OnInit {
  
  public tabs: ITab[] = Tabs;
  public currentTabIndex: number = null;
  public giftCards: IProductCard[] = GiftCards;
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currentTabIndex = this.getCurrentTabIndex(this.router.url);
  }
  
  public onTabClick(tab: ITab): void {
    this.router.navigateByUrl(tab.url);
  }
  
  private getCurrentTabIndex(url: string): number {
    return this.tabs.findIndex(tab => url.includes(tab.url)) || 0;
  }

}

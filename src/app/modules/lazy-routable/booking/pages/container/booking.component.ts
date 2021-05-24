
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { ITab } from '@app/interfaces';

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
    return this.tabs.findIndex(tab => tab.url === url) || 0;
  }

}

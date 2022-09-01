import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { ITab } from '@app/interfaces';
import { tap, filter } from 'rxjs/operators';
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
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.currentTabIndex = this.getCurrentTabIndex(this.router.url);
    this.updateTabOnRouteChange();
  }
  
  private getCurrentTabIndex(url: string): number {
    const index = this.tabs.findIndex(tab => url.includes(tab.url));
    return index === -1 ? 0 : index;
  }

  private updateTabOnRouteChange(): void {
    this.router.events.pipe(
      filter((res: RouterEvent) => res instanceof NavigationEnd),
      tap((res: RouterEvent) => {
        this.currentTabIndex = this.getCurrentTabIndex(res.url);
      })
    ).subscribe();
  }

}

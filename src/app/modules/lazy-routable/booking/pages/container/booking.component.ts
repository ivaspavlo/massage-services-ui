
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
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void { }
  
  public onTabClick(name: string): void {
    this.router.navigate(['/']);
  }

}

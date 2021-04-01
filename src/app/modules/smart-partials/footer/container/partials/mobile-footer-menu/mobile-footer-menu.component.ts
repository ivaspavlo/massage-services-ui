
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';


@Component({
  selector: 'app-mobile-footer-menu',
  templateUrl: './mobile-footer-menu.component.html',
  styleUrls: ['./mobile-footer-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileFooterMenuComponent implements OnInit {

  @Input() footerItems: { title: string; items: { uiName: string; link: string; }[] }[];

  constructor() { }

  ngOnInit(): void { }

}

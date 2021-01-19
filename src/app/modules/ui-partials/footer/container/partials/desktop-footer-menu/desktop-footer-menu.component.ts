
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';


@Component({
  selector: 'app-desktop-footer-menu',
  templateUrl: './desktop-footer-menu.component.html',
  styleUrls: ['./desktop-footer-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DesktopFooterMenuComponent implements OnInit {

  @Input() footerItems: { title: string; items: { uiName: string; link: string; }[] }[];

  constructor() { }

  ngOnInit(): void { }

}

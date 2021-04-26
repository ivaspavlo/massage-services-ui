
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FOOTER_MENU_ITEMS } from '../constants';
import { IFooterItem } from '../interfaces';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  public footerItems: IFooterItem[] = FOOTER_MENU_ITEMS;

  constructor() { }

  ngOnInit(): void { }

}

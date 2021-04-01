
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FOOTER_MENU_ITEMS, SOCIAL_BUTTONS } from '../constants';
import { IFooterItem, ISocialButton } from '../interfaces';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  public socialButtons: ISocialButton[] = SOCIAL_BUTTONS;
  public footerItems: IFooterItem[] = FOOTER_MENU_ITEMS;

  constructor() { }

  ngOnInit(): void { }

}

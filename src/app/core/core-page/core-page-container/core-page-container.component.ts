
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MAIN_MENU_ITEMS } from '../constants';


@Component({
  selector: 'app-core-page-container',
  templateUrl: './core-page-container.component.html',
  styleUrls: ['./core-page-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CorePageContainerComponent implements OnInit {

  public menuItems = MAIN_MENU_ITEMS;

  constructor() { }

  ngOnInit(): void { }

}

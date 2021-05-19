
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IHeaderDropdownMenu } from '../interfaces';


@Component({
  selector: 'app-header-dropdown',
  templateUrl: './header-dropdown.component.html',
  styleUrls: ['./header-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderDropdownComponent implements OnInit {

  @Input() menu: IHeaderDropdownMenu;

  constructor() { }

  ngOnInit(): void { }

}


import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { DialogService } from '@app/modules/ui/dialog/services';

import { MAIN_MENU_ITEMS } from '../constants';
import { IHeaderMenuItem } from '../interfaces';
import { LoginModalComponent } from '../modals/login-modal/login-modal.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  @Input() public isShrinked = false;
  public menuItems: IHeaderMenuItem[] = MAIN_MENU_ITEMS;
  public isOpen = false;

  constructor(
    private dialogService: DialogService
  ) { }

  ngOnInit(): void { }
  
  public onShowLoginModal(): void {
    this.dialogService.open(LoginModalComponent).afterClosed.subscribe(
      result => console.log('Dialog closed', result)
    );
  }

}

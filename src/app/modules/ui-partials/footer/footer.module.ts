
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleModule } from '@app/modules/ui-partials/title/title.module';
import { LogoModule } from '@app/modules/ui-partials/logo/logo.module';
import { NgMenuModule } from '@app/modules/ui-partials/ng-menu/ng-menu.module';
import { NgButtonModule } from '@app/modules/ui-partials/ng-button/ng-button.module';

import { FooterComponent } from './container/footer.component';
import { MobileFooterMenuComponent } from './container/partials/mobile-footer-menu/mobile-footer-menu.component';
import { DesktopFooterMenuComponent } from './container/partials/desktop-footer-menu/desktop-footer-menu.component';
import { BottomPanelComponent } from './container/partials/bottom-panel/bottom-panel.component';


@NgModule({
  declarations: [
    FooterComponent,
    MobileFooterMenuComponent,
    DesktopFooterMenuComponent,
    BottomPanelComponent
  ],
  imports: [
    CommonModule,
    TitleModule,
    LogoModule,
    NgMenuModule,
    NgButtonModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }

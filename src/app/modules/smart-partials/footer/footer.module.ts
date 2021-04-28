
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleModule, LogoModule, NgMenuModule, SocialModule } from '@app/modules/ui';

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
    SocialModule,
    NgMenuModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }

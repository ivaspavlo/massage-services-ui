
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpansionPanelModule } from '@app/modules/ui-partials/expansion-panel/expansion-panel.module';
import { TitleModule } from '@app/modules/ui-partials/title/title.module';
import { LogoModule } from '@app/modules/ui-partials/logo/logo.module';
import { PhoneAnimationModule } from '@app/modules/ui-partials/phone-animation/phone-animation.module';

import { HeaderComponent } from './container/header.component';
import { HamburgerComponent } from './container/partials/hamburger/hamburger.component';
import { MobileMenuComponent } from './container/partials/mobile-menu/mobile-menu.component';
import { DesktopMenuComponent } from './container/partials/desktop-menu/desktop-menu.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HamburgerComponent,
    MobileMenuComponent,
    DesktopMenuComponent
  ],
  imports: [
    CommonModule,
    ExpansionPanelModule,
    TitleModule,
    LogoModule,
    PhoneAnimationModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }

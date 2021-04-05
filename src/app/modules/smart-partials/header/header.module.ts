
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@app/shared/shared.module';
import { TitleModule, ExpansionPanelModule, LogoModule, PhoneAnimationModule, LoginModule } from '@app/modules/ui';

import { HeaderComponent } from './container/header.component';
import { PARTIALS } from './container/partials';
import { MODALS } from './modals';


@NgModule({
  declarations: [
    ...MODALS,
    ...PARTIALS,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ExpansionPanelModule,
    TitleModule,
    LogoModule,
    LoginModule,
    PhoneAnimationModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }

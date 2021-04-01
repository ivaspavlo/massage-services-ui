
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TitleModule, ExpansionPanelModule, LogoModule, PhoneAnimationModule } from '@app/modules/ui';

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

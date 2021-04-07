
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@app/shared/shared.module';
import { TitleModule, ExpansionPanelModule, LogoModule, PhoneAnimationModule, InputModule, ButtonMainModule } from '@app/modules/ui';

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
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ExpansionPanelModule,
    TitleModule,
    LogoModule,
    PhoneAnimationModule,
    InputModule,
    ButtonMainModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }

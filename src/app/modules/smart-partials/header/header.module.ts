
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@app/shared/shared.module';
import { TitleModule, ExpansionPanelModule, LogoModule, PhoneAnimationModule, InputModule, ButtonPrimaryModule, HamburgerModule, HeaderDropdownModule, LanguageBarModule, PopoverModule } from '@app/modules/ui';

import { HeaderComponent } from './container/header.component';
import { MapLangItemsPipe } from './pipes/map-lang-items.pipe';
import { MapCurrentLangItemPipe } from './pipes/map-current-lang-item.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    MapLangItemsPipe,
    MapCurrentLangItemPipe
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
    ButtonPrimaryModule,
    HamburgerModule,
    HeaderDropdownModule,
    LanguageBarModule,
    PopoverModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreTranslationModule } from '@app/core/core-translation.module';
import { SharedModule } from '@app/shared/shared.module';
import { ExpansionPanelModule, PhoneAnimationModule, InputModule, ButtonPrimaryModule, HamburgerModule, LanguageBarModule, PopoverModule } from '@app/modules/ui';

import { PARTIALS } from './partials';
import { PIPES } from './pipes';
import { COMPONENTS } from './components';


@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES,
    ...PARTIALS
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ExpansionPanelModule,
    PhoneAnimationModule,
    InputModule,
    ButtonPrimaryModule,
    HamburgerModule,
    LanguageBarModule,
    PopoverModule,
    CoreTranslationModule.forChild()
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class HeaderModule { }

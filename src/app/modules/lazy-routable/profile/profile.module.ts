import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreTranslationModule } from '@app/core/core-translation.module';
import { HeaderModule, FooterModule } from '@app/modules/smart-partials';
import { ButtonSecondaryModule, DatePickerModule, DateTimeCardModule, ImgLoaderModule, ProfileFormModule } from '@app/modules/ui';

import { ProfileRoutingModule } from './profile-routing.module';
import { PAGES } from './pages';


@NgModule({
  declarations: [
    ...PAGES
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    HeaderModule,
    FooterModule,
    ButtonSecondaryModule,
    DateTimeCardModule,
    ProfileFormModule,
    ImgLoaderModule,
    DatePickerModule,
    CoreTranslationModule.forChild()
  ]
})
export class ProfileModule { }

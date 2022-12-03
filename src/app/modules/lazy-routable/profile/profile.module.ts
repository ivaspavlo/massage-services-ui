import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { CoreTranslationModule } from '@app/core/core-translation.module';
import { HeaderModule, FooterModule } from '@app/modules/smart-partials';
import { ButtonPrimaryModule, ButtonSecondaryModule, DatePickerModule, DateTimeCardModule, DialogModule, ImgLoaderModule, ProfileFormModule } from '@app/modules/ui';

import { ProfileRoutingModule } from './profile-routing.module';
import { PAGES } from './pages';
import { MODALS } from './modals';
import { ProfileFacade } from './profile.facade';


@NgModule({
  declarations: [
    ...PAGES,
    ...MODALS
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    HeaderModule,
    FooterModule,
    ButtonPrimaryModule,
    ButtonSecondaryModule,
    DateTimeCardModule,
    ProfileFormModule,
    ImgLoaderModule,
    DatePickerModule,
    DialogModule,
    CoreTranslationModule.forChild()
  ],
  providers: [
    ProfileFacade
  ]
})
export class ProfileModule { }

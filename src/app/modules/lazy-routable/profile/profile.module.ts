import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule, FooterModule } from '@app/modules/smart-partials';
import { ButtonSecondaryModule, DateTimeCardModule, ProfileFormModule } from '@app/modules/ui';

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
    ProfileFormModule
  ]
})
export class ProfileModule { }

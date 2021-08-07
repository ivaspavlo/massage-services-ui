
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule, FooterModule } from '@app/modules/smart-partials';
import { ButtonAsideModule, ButtonSecondaryModule, DateTimeCardModule } from '@app/modules/ui';

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
    ButtonAsideModule
  ]
})
export class ProfileModule { }

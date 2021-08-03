
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule, FooterModule } from '@app/modules/smart-partials';

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
    FooterModule
  ]
})
export class ProfileModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule, HeaderModule } from '@app/modules/smart-partials';
import { CoreTranslationModule } from '@app/core/core-translation.module';

import { InfoRoutingModule } from './info-routing.module';
import { PAGES } from './pages';
import { SERVICES } from './services';
import { PARTIALS } from './partials';


@NgModule({
  declarations: [
    ...PAGES,
    ...PARTIALS
  ],
  providers: [
    ...SERVICES
  ],
  imports: [
    CommonModule,
    InfoRoutingModule,
    HeaderModule,
    FooterModule,
    CoreTranslationModule.forChild()
  ]
})
export class InfoModule { }

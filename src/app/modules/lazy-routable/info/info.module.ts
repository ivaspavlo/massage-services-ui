import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule, HeaderModule } from '@app/modules/smart-partials';
import { CoreTranslationModule } from '@app/core/core-translation.module';
import { PAGES } from './pages';
import { InfoRoutingModule } from './info-routing.module';


@NgModule({
  declarations: [
    ...PAGES
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

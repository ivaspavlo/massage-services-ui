
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreTranslationModule } from '@app/core/core-translation.module';
import { SharedModule } from '@app/shared/shared.module';

import { HeaderModule, FooterModule } from '@app/modules/smart-partials';
import { ArticleCardModule, ProductCardModule, TabsModule, DatePickerModule, ButtonPrimaryModule, ButtonSecondaryModule, DateTimeCardModule, ProductModule } from '@app/modules/ui';

import { BookingRoutingModule } from './booking-routing.module';

import { PAGES } from './pages';
import { PARTIALS } from './partials';

import { BookingService } from './services';
import { BookingFacade } from './booking.facade';


@NgModule({
  declarations: [
    ...PAGES,
    ...PARTIALS
  ],
  providers: [
    BookingService,
    BookingFacade
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    BookingRoutingModule,
    HeaderModule,
    FooterModule,
    TabsModule,
    ArticleCardModule,
    ProductCardModule,
    DatePickerModule,
    ButtonPrimaryModule,
    ButtonSecondaryModule,
    DateTimeCardModule,
    ProductModule,
    CoreTranslationModule.forChild()
  ]
})
export class BookingModule { }

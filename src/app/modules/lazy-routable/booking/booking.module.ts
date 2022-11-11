import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreTranslationModule } from '@app/core/core-translation.module';
import { SharedModule } from '@app/shared/shared.module';

import { HeaderModule, FooterModule } from '@app/modules/smart-partials';
import { ArticleCardModule, ProductCardModule, TabsModule, DatePickerModule, ButtonPrimaryModule, ButtonSecondaryModule, DateTimeCardModule, LogoModule, ToastModule } from '@app/modules/ui';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingFacade } from './booking.facade';

import { PAGES } from './pages';
import { PARTIALS } from './partials';
import { MODALS } from './modals';
import { PIPES } from './pipes';


@NgModule({
  declarations: [
    ...PAGES,
    ...PARTIALS,
    ...MODALS,
    ...PIPES
  ],
  providers: [
    BookingFacade,
    DatePipe
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
    LogoModule,
    ToastModule.forRoot(),
    CoreTranslationModule.forChild()
  ]
})
export class BookingModule { }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderModule, FooterModule } from '@app/modules/smart-partials';
import { ArticleCardModule, ProductCardModule, TabsModule, DatePickerModule, ButtonPrimaryModule } from '@app/modules/ui';

import { BookingRoutingModule } from './booking-routing.module';

import { PAGES } from './pages';
import { PIPES } from './pipes';


@NgModule({
  declarations: [
    ...PAGES,
    ...PIPES
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BookingRoutingModule,
    HeaderModule,
    FooterModule,
    TabsModule,
    ArticleCardModule,
    ProductCardModule,
    DatePickerModule,
    ButtonPrimaryModule
  ]
})
export class BookingModule { }

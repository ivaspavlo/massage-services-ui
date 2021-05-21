
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule, FooterModule } from '@app/modules/smart-partials';
import { ArticleCardModule, ProductCardModule, TabsModule } from '@app/modules/ui';

import { BookingRoutingModule } from './booking-routing.module';
import { PAGES } from './pages';


@NgModule({
  declarations: [
    ...PAGES
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    HeaderModule,
    FooterModule,
    TabsModule,
    ArticleCardModule,
    ProductCardModule
  ]
})
export class BookingModule { }

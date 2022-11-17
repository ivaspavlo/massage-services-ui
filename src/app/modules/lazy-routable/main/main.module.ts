import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@app/shared/shared.module';
import { CoreTranslationModule } from '@app/core/core-translation.module';
import { BrandSignatureModule, ScrollDownModule, CarouselModule, ArrowAnimatedButtonModule, ProductCardModule, SliderQuoteModule, InputModule, ButtonPrimaryModule, SliderModule, ButtonSecondaryModule, HorizontalMenuModule, BlogArticleModule } from '@app/modules/ui';
import { HeaderModule, FooterModule } from '@app/modules/smart-partials';

import { MainRoutingModule } from './main-routing.module';

import { MODALS } from './modals';
import { PAGES } from './pages';
import { PARTIALS } from './partials';


@NgModule({
  declarations: [
    ...PAGES,
    ...MODALS,
    ...PARTIALS
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainRoutingModule,
    SharedModule,
    HeaderModule,
    BrandSignatureModule,
    ScrollDownModule,
    FooterModule,
    CarouselModule,
    ArrowAnimatedButtonModule,
    ProductCardModule,
    SliderQuoteModule,
    InputModule,
    ButtonPrimaryModule,
    SliderModule,
    ButtonSecondaryModule,
    HorizontalMenuModule,
    HeaderModule,
    BlogArticleModule,
    CoreTranslationModule.forChild()
  ]
})
export class MainModule { }

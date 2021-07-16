
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@app/shared/shared.module';
import { BrandSignatureModule, ScrollDownModule, CarouselModule, ArrowAnimatedButtonModule, ProductCardModule, SliderQuoteModule, InputModule, ButtonPrimaryModule, SliderModule, ButtonSecondaryModule, HorizontalMenuModule, LogoModule } from '@app/modules/ui';
import { HeaderModule, FooterModule } from '@app/modules/smart-partials';

import { MainRoutingModule } from './main-routing.module';

import { COMPONENTS } from './container';
import { MODALS } from './modals';


@NgModule({
  declarations: [
    ...COMPONENTS,
    ...MODALS
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
    LogoModule,
    HeaderModule
  ]
})
export class MainModule { }

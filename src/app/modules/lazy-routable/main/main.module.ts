
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@app/shared/shared.module';
import { NgButtonModule, NgExpansionPanelModule, BrandSignatureModule, ScrollDownModule, CarouselModule, ArrowAnimatedButtonModule, ProductCardModule, SliderQuoteModule, InputModule, ButtonMainModule } from '@app/modules/ui';
import { HeaderModule, FooterModule } from '@app/modules/smart-partials';

import { MainRoutingModule } from './main-routing.module';
import { COMPONENTS } from './main-container';


@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    MainRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    NgButtonModule,
    NgExpansionPanelModule,
    HeaderModule,
    BrandSignatureModule,
    ScrollDownModule,
    FooterModule,
    CarouselModule,
    ArrowAnimatedButtonModule,
    ProductCardModule,
    SliderQuoteModule,
    InputModule,
    ButtonMainModule
  ]
})
export class MainModule { }

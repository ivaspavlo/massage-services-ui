
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { NgButtonModule, NgExpansionPanelModule, BrandSignatureModule, ScrollDownModule, FooterModule, CarouselModule, ArrowAnimatedButtonModule, ProductCardModule, CarouselSingleItemModule } from '@app/modules/ui-partials';

import { MainRoutingModule } from './main-routing.module';

import { COMPONENTS } from './main-container';


@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,
    NgButtonModule,
    NgExpansionPanelModule,
    BrandSignatureModule,
    ScrollDownModule,
    FooterModule,
    CarouselModule,
    ArrowAnimatedButtonModule,
    ProductCardModule,
    CarouselSingleItemModule
  ]
})
export class MainModule { }

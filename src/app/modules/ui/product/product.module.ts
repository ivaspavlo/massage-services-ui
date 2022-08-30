import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreTranslationModule } from '@app/core/core-translation.module';

import { ButtonSecondaryModule } from '../button-secondary/button-secondary.module';
import { ProductComponent } from './container/product.component';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ButtonSecondaryModule,
    CoreTranslationModule.forChild()
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }

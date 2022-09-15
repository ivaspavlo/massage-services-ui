import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreTranslationModule } from '@app/core/core-translation.module';
import { ButtonPrimaryModule } from '@app/modules/ui';
import { NOT_FOUND_COMPONENTS } from './not-found-container';
import { NotFoundRoutingModule } from './not-found-routing.module';


@NgModule({
  declarations: [
    ...NOT_FOUND_COMPONENTS
  ],
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    CoreTranslationModule.forChild(),
    ButtonPrimaryModule
  ]
})
export class NotFoundModule { }

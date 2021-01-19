
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NOT_FOUND_COMPONENTS } from './not-found-container';
import { NotFoundRoutingModule } from './not-found-routing.module';


@NgModule({
  declarations: [
    ...NOT_FOUND_COMPONENTS
  ],
  imports: [
    NotFoundRoutingModule,
    CommonModule
  ]
})
export class NotFoundModule { }

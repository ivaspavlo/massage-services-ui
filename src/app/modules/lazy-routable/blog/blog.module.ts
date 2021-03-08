
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';

import { COMPONENTS } from './container';


@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    BlogRoutingModule,
    CommonModule
  ]
})
export class BlogModule { }

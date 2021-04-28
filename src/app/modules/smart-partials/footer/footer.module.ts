
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleModule, LogoModule, NgMenuModule, SocialModule } from '@app/modules/ui';

import { FooterComponent } from './container/footer.component';


@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    TitleModule,
    LogoModule,
    SocialModule,
    NgMenuModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }

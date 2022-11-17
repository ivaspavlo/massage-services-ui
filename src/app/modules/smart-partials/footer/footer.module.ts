import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreTranslationModule } from '@app/core/core-translation.module';
import { SharedModule } from '@app/shared/shared.module';
import { SocialModule, ButtonPrimaryModule, InputModule } from '@app/modules/ui';

import { NewsletterComponent } from './partials/newsletter/newsletter.component';
import { FooterComponent } from './container/footer.component';


@NgModule({
  declarations: [
    NewsletterComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    ButtonPrimaryModule,
    InputModule,
    SocialModule,
    CoreTranslationModule.forChild()
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }

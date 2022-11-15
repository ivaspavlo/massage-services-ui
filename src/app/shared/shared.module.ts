import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreTranslationModule } from '@app/core/core-translation.module';

import { APP_DIRECTIVES } from './directives';
import { APP_PIPES } from './pipes';
import { APP_COMPONENTS } from './components';


@NgModule({
  declarations: [
    ...APP_DIRECTIVES,
    ...APP_PIPES,
    ...APP_COMPONENTS
  ],
  imports: [
    CommonModule,
    CoreTranslationModule.forChild()
  ],
  exports: [
    ...APP_DIRECTIVES,
    ...APP_PIPES,
    ...APP_COMPONENTS
  ]
})
export class SharedModule { }

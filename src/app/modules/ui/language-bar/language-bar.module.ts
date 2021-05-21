
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageBarComponent } from './container/language-bar.component';


@NgModule({
  declarations: [
    LanguageBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LanguageBarComponent
  ]
})
export class LanguageBarModule { }

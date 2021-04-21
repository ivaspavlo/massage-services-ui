
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorizontalMenuComponent } from './container/horizontal-menu.component';
import { HorizontalMenuItemDirective } from './directives';


@NgModule({
  declarations: [
    HorizontalMenuComponent,
    HorizontalMenuItemDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HorizontalMenuComponent,
    HorizontalMenuItemDirective
  ]
})
export class HorizontalMenuModule { }

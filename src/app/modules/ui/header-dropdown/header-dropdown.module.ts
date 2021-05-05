
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderDropdownComponent } from './header-dropdown/header-dropdown.component';


@NgModule({
  declarations: [
    HeaderDropdownComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderDropdownComponent
  ]
})
export class HeaderDropdownModule { }

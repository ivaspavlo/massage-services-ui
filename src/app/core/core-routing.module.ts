
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CORE_ROUTES } from './constants/core-routes';
import { AuthGuard } from './guards';


@NgModule({
  imports: [
    RouterModule.forRoot(CORE_ROUTES)
  ],
  providers: [
    AuthGuard
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule { }

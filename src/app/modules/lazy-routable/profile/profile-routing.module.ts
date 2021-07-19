
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PROFILE_ROUTES } from './constants/profile-routes.constant';


@NgModule({
  imports: [
    RouterModule.forChild(PROFILE_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class ProfileRoutingModule { }

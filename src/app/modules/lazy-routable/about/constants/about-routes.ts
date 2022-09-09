import { Routes } from "@angular/router";
import { AboutComponent } from "../pages/about/about.component";


export enum ABOUT_ROUTE_NAMES {
  BLANK = ''
}

export const ABOUT_ROUTES: Routes = [
  {
    path: ABOUT_ROUTE_NAMES.BLANK,
    component: AboutComponent
  }
];
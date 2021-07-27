
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppInitService } from './app-init.service';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';


export function initializeApp1(appInitService: AppInitService) {
  return (): Promise<any> => appInitService.init()
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: initializeApp1, deps: [AppInitService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule, HeaderModule } from '@app/modules/smart-partials';
import { CoreTranslationModule } from '@app/core/core-translation.module';
import { AboutComponent } from './pages/about/about.component';
import { AboutRoutingModule } from './about-routing.module';
import { AboutService } from './services/about.service';


@NgModule({
  declarations: [
    AboutComponent
  ],
  providers: [
    AboutService
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    HeaderModule,
    FooterModule,
    CoreTranslationModule.forChild()
  ]
})
export class AboutModule { }

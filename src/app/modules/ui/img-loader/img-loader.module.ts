import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilePickerModule } from 'ngx-awesome-uploader';

import { ImgLoaderComponent } from './container/img-loader.component';


@NgModule({
  declarations: [
    ImgLoaderComponent
  ],
  imports: [
    CommonModule,
    FilePickerModule
  ],
  exports: [
    ImgLoaderComponent
  ]
})
export class ImgLoaderModule { }

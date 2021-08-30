import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCropperModule } from 'ngx-image-cropper';

import { ImgLoaderComponent } from './container/img-loader.component';


@NgModule({
  declarations: [
    ImgLoaderComponent
  ],
  imports: [
    CommonModule,
    ImageCropperModule
  ],
  exports: [
    ImgLoaderComponent
  ]
})
export class ImgLoaderModule { }

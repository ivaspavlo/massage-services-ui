import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';


@Component({
  selector: 'app-img-loader',
  templateUrl: './img-loader.component.html',
  styleUrls: ['./img-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImgLoaderComponent implements OnInit {
  
  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor() {}

  public ngOnInit(): void {}
  
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  
  imageLoaded() {
    // show cropper
  }
  
  cropperReady() {
    // cropper ready
  }
  
  loadImageFailed() {
    // show message
  }

}

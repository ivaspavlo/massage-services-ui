import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';


@Component({
  selector: 'app-img-loader',
  templateUrl: './img-loader.component.html',
  styleUrls: ['./img-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImgLoaderComponent implements OnInit {
  
  @Input() btnTitles: { fileInput: string; crop: string; clear: string; } = { fileInput: 'Select File', crop: 'Crop', clear: 'Clear' };
  
  public image: any = '';
  public croppedImage: any = '';

  constructor() { }

  public ngOnInit(): void { }
  
  public fileChangeEvent(event: any): void {
    debugger;
    this.image = event;
  }
  
  public onClear(): void {
    this.image = '';
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

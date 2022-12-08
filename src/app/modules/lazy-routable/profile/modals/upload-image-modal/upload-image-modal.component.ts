import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { ImageCroppedEvent, ImageCropperComponent } from 'ngx-image-cropper';
import { DialogRef } from '@app/modules/ui/dialog';


@Component({
  selector: 'app-upload-image-modal',
  templateUrl: './upload-image-modal.component.html',
  styleUrls: ['./upload-image-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadImageModalComponent {

  @ViewChild(ImageCropperComponent) imageCropper: ImageCropperComponent;

  constructor(
    private dialog: DialogRef
  ) { }

  public imageChangedEvent: Event;
  public croppedImage: string | null | undefined;

  public onChange(event: Event): void {
    this.imageChangedEvent = event;
  }

  public imageCropped(event: ImageCroppedEvent): void {
    this.croppedImage = event.base64;
  }

  public crop(): void {
    this.imageCropper.crop();
  }

  public onSave(): void {
    if (typeof this.croppedImage === 'string') {
      const imgBlob = this.dataURIToBlob(this.croppedImage);
      // this.saveCroppedImage.emit({
      //   imgBase64: this.croppedImage,
      //   imgBlob
      // });
    }
  }

  private dataURIToBlob(dataURI: string): Blob {
    const splitDataURI = dataURI.split(',');
    const byteString = splitDataURI[0].indexOf('base64') >= 0 ?
      atob(splitDataURI[1]) :
      decodeURI(splitDataURI[1]);

    const mimeString = splitDataURI[0].split(':')[1].split(';')[0];

    const ia = new Uint8Array(byteString.length)
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], { type: mimeString });
  }

}

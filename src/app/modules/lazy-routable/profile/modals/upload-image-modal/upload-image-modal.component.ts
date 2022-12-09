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
      this.dialog.close(this.croppedImage);
    }
  }

}

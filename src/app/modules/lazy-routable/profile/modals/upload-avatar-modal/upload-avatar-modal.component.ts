import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-upload-avatar-modal',
  templateUrl: './upload-avatar-modal.component.html',
  styleUrls: ['./upload-avatar-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadAvatarModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

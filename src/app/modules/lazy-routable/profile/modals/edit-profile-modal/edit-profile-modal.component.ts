import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-edit-profile-modal',
  templateUrl: './edit-profile-modal.component.html',
  styleUrls: ['./edit-profile-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditProfileModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

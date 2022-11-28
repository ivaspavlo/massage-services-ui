import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogConfig } from '@app/modules/ui/dialog';
import { Observable } from 'rxjs';
import { IUserProfile } from '../../interfaces';


@Component({
  selector: 'app-edit-profile-modal',
  templateUrl: './edit-profile-modal.component.html',
  styleUrls: ['./edit-profile-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditProfileModalComponent implements OnInit {

  public userProfile$: Observable<IUserProfile>;;

  constructor(
    public config: DialogConfig,
  ) { }

  ngOnInit(): void {
    this.userProfile$ = this.config.data;
  }

}

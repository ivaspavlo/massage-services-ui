import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from '@app/core/services';
import { DialogService } from '@app/modules/ui/dialog';
import { Observable } from 'rxjs';
import { IUserProfile } from '../../interfaces/user-profile.interface';
import { EditProfileModalComponent } from '../../modals/edit-profile-modal/edit-profile-modal.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {

  public userProfile$: Observable<IUserProfile>;
  public profileForm: FormGroup;

  constructor(
    private userService: UserService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.userProfile$ = this.userService.getUserProfileData();
  }

  public toggleEditMode(): void {
    this.dialogService.open(EditProfileModalComponent, this.userProfile$);
  }

}

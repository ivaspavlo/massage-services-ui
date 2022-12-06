import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DialogService } from '@app/modules/ui/dialog';
import { Observable } from 'rxjs';
import { IUserProfile } from '../../interfaces/user-profile.interface';
import { EditProfileModalComponent } from '../../modals/edit-profile-modal/edit-profile-modal.component';
import { UploadAvatarModalComponent } from '../../modals/upload-avatar-modal/upload-avatar-modal.component';
import { ProfileFacade } from '../../profile.facade';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {

  public userProfile$: Observable<IUserProfile>;
  public bookedData$: Observable<any>;
  public profileForm: FormGroup;

  constructor(
    private profileFacade: ProfileFacade,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.userProfile$ = this.profileFacade.getProfileData();
    this.bookedData$ = this.profileFacade.getBookingData();
  }

  public toggleEditMode(): void {
    this.dialogService.open(EditProfileModalComponent, this.userProfile$);
  }

  public onUploadPhoto(): void {
    this.dialogService.open(UploadAvatarModalComponent);
  }

}

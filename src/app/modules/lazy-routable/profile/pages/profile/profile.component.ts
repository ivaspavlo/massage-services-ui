import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { takeUntil, switchMap } from 'rxjs/operators';
import { DestroySubscriptions } from '@app/shared/classes';
import { DialogService } from '@app/modules/ui/dialog';
import { IUserProfile } from '../../interfaces/user-profile.interface';
import { EditProfileModalComponent } from '../../modals/edit-profile-modal/edit-profile-modal.component';
import { UploadImageModalComponent } from '../../modals/upload-image-modal/upload-image-modal.component';
import { ProfileFacade } from '../../profile.facade';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent extends DestroySubscriptions implements OnInit {

  public userProfile$: Observable<IUserProfile>;
  public bookedData$: Observable<any>;
  public profileForm: FormGroup;

  constructor(
    private profileFacade: ProfileFacade,
    private dialogService: DialogService
  ) {
    super();
  }

  ngOnInit(): void {
    this.userProfile$ = this.profileFacade.getProfileData();
    this.bookedData$ = this.profileFacade.getBookingData();
  }

  public toggleEditMode(): void {
    this.dialogService.open(EditProfileModalComponent, this.userProfile$);
  }

  public onUploadPhoto(): void {
    this.dialogService.open(UploadImageModalComponent).afterClosed.pipe(
      takeUntil(this.componentDestroyed$),
      switchMap((imgBase64: string) => this.profileFacade.updateProfileImg(imgBase64))
    ).subscribe((res: boolean) => {
      if (res) {
        this.userProfile$ = this.profileFacade.getProfileData();
      }
    });
  }

}

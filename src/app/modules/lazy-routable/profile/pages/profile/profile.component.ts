import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from '@app/core/services';
import { Observable } from 'rxjs';
import { IUserProfile } from '../../interfaces/user-profile.interface';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {

  public userProfile$: Observable<IUserProfile>;
  public profileForm: FormGroup;
  public isEditMode = false;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userProfile$ = this.userService.getUserProfileData();
  }

  public toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }

}

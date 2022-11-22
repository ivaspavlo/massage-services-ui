import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userProfile$ = this.userService.getUserProfileData();
  }

}

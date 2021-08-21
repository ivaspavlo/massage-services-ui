import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '@app/core/services';
import { IProfileFormValue } from '@app/interfaces';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {

  constructor(
    private authService: AuthService
  ) { }
  
  public onSubmit(value: IProfileFormValue): void {
    console.log(value);
  }

}

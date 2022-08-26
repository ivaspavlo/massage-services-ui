import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ErrorMessages } from '@app/core/constants';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  
  public errorMessages = ErrorMessages;

}

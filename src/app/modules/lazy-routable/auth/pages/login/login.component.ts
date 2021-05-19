
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ErrorMessages } from '@app/core/constants';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  
  public errorMessages = ErrorMessages;

  constructor() { }

  ngOnInit(): void { }

}

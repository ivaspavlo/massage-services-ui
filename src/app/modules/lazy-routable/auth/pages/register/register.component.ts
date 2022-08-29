import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IProfileFormValue } from '@app/interfaces';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {

  constructor() { }
  
  public onSubmit(value: IProfileFormValue): void {}

}

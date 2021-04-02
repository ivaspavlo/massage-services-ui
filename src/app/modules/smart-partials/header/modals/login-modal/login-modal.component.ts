
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogConfig, DialogRef } from '@app/modules/ui/dialog';


@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginModalComponent implements OnInit {

  constructor(
    public config: DialogConfig,
    public dialog: DialogRef
  ) { }

  ngOnInit(): void { }
  
  public onClose(): void {
    this.dialog.close('some value');
  }

}

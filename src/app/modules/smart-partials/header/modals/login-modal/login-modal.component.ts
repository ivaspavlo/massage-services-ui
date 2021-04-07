
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogConfig, DialogRef } from '@app/modules/ui/dialog';


@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginModalComponent implements OnInit {
  
  public form: FormGroup;

  constructor(
    public config: DialogConfig,
    public dialog: DialogRef,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void { }
  
  public onClose(): void {
    this.dialog.close('some value');
  }
  
  public onSubmit(): void { }
  
  private createForm(): FormGroup {
    return this.fb.group({
      password: '',
      login: ''
    });
  }

}


import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  ngOnInit(): void {
    this.form = this.createForm();
  }
  
  public onClose(): void { }
  
  public onSubmit(): void { }
  
  private createForm(): FormGroup {
    return this.fb.group({
      password: ['', Validators.required],
      login: ['', Validators.required]
    });
  }

}

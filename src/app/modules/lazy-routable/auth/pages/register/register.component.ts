import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@app/core/services';
import { IProfileFormValue } from '@app/interfaces';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.form = this.initForm();
  }
  
  public onSubmit(value: IProfileFormValue): void {
    console.log(value);
  }
  
  private initForm(): FormGroup {
    return this.fb.group({
      consent: this.fb.control(false, Validators.requiredTrue)
    });
  }

}

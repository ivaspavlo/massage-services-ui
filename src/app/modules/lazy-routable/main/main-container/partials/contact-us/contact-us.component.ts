
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactUsComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.getForm();
  }

  private getForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required]),
      msg: this.fb.control('')
    });
  }

  public onSubmit(): void {
    console.log('CONTACT FORM SUBMITTED');
  }

}

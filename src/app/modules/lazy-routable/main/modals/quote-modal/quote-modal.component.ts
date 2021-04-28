
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-quote-modal',
  templateUrl: './quote-modal.component.html',
  styleUrls: ['./quote-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuoteModalComponent implements OnInit {

  public contacUsForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.contacUsForm = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required]),
      msg: this.fb.control('')
    });
  }

  public onSubmit(): void {
    console.log('CONTACT FORM SUBMITTED');
  }

}

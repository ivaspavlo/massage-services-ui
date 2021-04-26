
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsletterComponent implements OnInit {
  
  public newsletterForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  
  private initForm(): void {
    this.newsletterForm = this.fb.group({
      newsletter: this.fb.control('', [Validators.required])
    });
  }
  
  public onSubmit(): void {
    console.log('NEWSLETTER FORM SUBMITTED');
  }

}

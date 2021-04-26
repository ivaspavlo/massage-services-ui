
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { SOCIAL_BUTTONS } from '../constants/social-buttons.constant';
import { ISocialButton } from '../interfaces';


@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialComponent implements OnInit {
  
  @Input() socialButtons: ISocialButton[] = SOCIAL_BUTTONS;

  constructor() { }

  ngOnInit(): void { }

}

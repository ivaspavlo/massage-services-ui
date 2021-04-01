import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-phone-animation',
  templateUrl: './phone-animation.component.html',
  styleUrls: ['./phone-animation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhoneAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

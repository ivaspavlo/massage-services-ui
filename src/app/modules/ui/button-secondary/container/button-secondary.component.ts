import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-button-secondary',
  templateUrl: './button-secondary.component.html',
  styleUrls: ['./button-secondary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonSecondaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

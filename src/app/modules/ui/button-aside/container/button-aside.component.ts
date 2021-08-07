import { Component, ChangeDetectionStrategy, Input } from '@angular/core';


@Component({
  selector: 'app-button-aside',
  templateUrl: './button-aside.component.html',
  styleUrls: ['./button-aside.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonAsideComponent {
  
  @Input() title: string;
  @Input() wipe: string;

  constructor() { }

}

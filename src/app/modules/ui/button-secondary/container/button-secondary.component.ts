
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';


@Component({
  selector: 'app-button-secondary',
  templateUrl: './button-secondary.component.html',
  styleUrls: ['./button-secondary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonSecondaryComponent implements OnInit {
  
  @Input() filled = false;
  @Input() title = 'button';
  @Input() routerLink = null;
  @Input() fullWidth = false;
  @Input() link = false;

  constructor() { }

  ngOnInit(): void { }

}

import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button-secondary',
  templateUrl: './button-secondary.component.html',
  styleUrls: ['./button-secondary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonSecondaryComponent {
  
  @Input() filled = false;
  @Input() title = 'button';
  @Input() routerLink = null;
  @Input() fullWidth = false;
  @Input() link = false;

  @Output() buttonSecondaryClick: EventEmitter<void> = new EventEmitter();

  public onClick(): void {
    this.buttonSecondaryClick.emit();
  }

}

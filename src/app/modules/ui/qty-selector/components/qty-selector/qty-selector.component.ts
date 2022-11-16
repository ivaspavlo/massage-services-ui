import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-qty-selector',
  templateUrl: './qty-selector.component.html',
  styleUrls: ['./qty-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QtySelectorComponent {

  @Input() qty = 0;
  @Input() step = 1;
  @Output() qtyChange: EventEmitter<number> = new EventEmitter();

  public onChange(add: boolean = false): void {
    if (!add && this.qty === 0) {
      return;
    }
    this.qty = add ?
      this.qty + this.step :
      this.qty - this.step;
    this.qtyChange.emit(this.qty);
  }

}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogConfig, DialogRef } from '@app/modules/ui/dialog';
import { IProduct } from '../../interfaces';


@Component({
  selector: 'app-book-date-modal',
  templateUrl: './book-date-modal.component.html',
  styleUrls: ['./book-date-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDateModalComponent implements OnInit {

  public product: IProduct;

  constructor(
    public config: DialogConfig,
    public dialog: DialogRef
  ) { }

  ngOnInit(): void {
    this.product = this.config.data;
  }

}

/**
 * @param {int} The month number, 0 based
 * @param {int} The year, not zero based, required to account for leap years
 * @return {Date[]} List with date objects for each day of the month
 */
function getDaysInMonth(month, year) {
  var date = new Date(year, month, 1);
  var days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

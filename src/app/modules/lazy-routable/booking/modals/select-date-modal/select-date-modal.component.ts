import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogConfig, DialogRef } from '@app/modules/ui/dialog';
import { Observable } from 'rxjs';
import { IBookingAvailable, IBookingDate, IBookingTime, IProduct } from '../../interfaces';


@Component({
  selector: 'app-select-date-modal',
  templateUrl: './select-date-modal.component.html',
  styleUrls: ['./select-date-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectDateModalComponent implements OnInit {

  public product: IProduct;
  public bookingData$: Observable<IBookingAvailable[]>;

  public currentDate: IBookingDate;
  public selectedSlots: Map<IBookingDate, IBookingTime[]> = new Map();

  get selectedSlotsQty() {
    return [].concat(...Array.from(this.selectedSlots.values()))?.length;
  }

  constructor(
    private config: DialogConfig,
    private dialog: DialogRef
  ) { }

  ngOnInit(): void {
    this.product = this.config.data.product;
    this.bookingData$ = this.config.data.bookingData$;
  }

  public onSelectDate(date: IBookingDate): void {
    this.currentDate = date;
  }

  public onSelectTime(time: IBookingTime): void {
    const slotsPerDate = this.selectedSlots.get(this.currentDate) || [];
    
    if (!slotsPerDate) {
      this.selectedSlots.set(this.currentDate, []);
      return;
    }

    const isIncluded = slotsPerDate.includes(time);
    const updatedItems = isIncluded ?
      slotsPerDate.filter(i => i !== time) :
      [...slotsPerDate, time];

    this.selectedSlots.set(this.currentDate, updatedItems);

    this.removeKeyIfEmpty(this.currentDate);
  }

  public onRemoveSlot(date: IBookingDate, slot: IBookingTime): void {
    const timeSlots = this.selectedSlots.get(date).filter(i => i !== slot);
    this.selectedSlots.set(date, timeSlots);
    this.removeKeyIfEmpty(date);
  }

  private removeKeyIfEmpty(key: IBookingDate): void {
    const hasNoItemsPerKey = !this.selectedSlots.get(key)?.length;
    if (hasNoItemsPerKey) {
      this.selectedSlots.delete(key);
    }
  }

  public onConfirm(): void {
    const dateTimeEntries = Array.from(this.selectedSlots.entries());
    const res = dateTimeEntries.map(([slotDate, timeSlots]: [IBookingDate, IBookingTime[]]) => {
      return {
        date: slotDate.dateString,
        timeSlots
      };
    });
    this.dialog.close(res);
  }

}

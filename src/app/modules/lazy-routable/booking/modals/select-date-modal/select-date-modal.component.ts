import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogConfig, DialogRef } from '@app/modules/ui/dialog';
import { Observable } from 'rxjs';
import { IProduct, IDatesGroup, IDateSlot, ITimeSlot } from '../../interfaces';


@Component({
  selector: 'app-select-date-modal',
  templateUrl: './select-date-modal.component.html',
  styleUrls: ['./select-date-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectDateModalComponent implements OnInit {

  public product: IProduct;
  public bookingData$: Observable<IDatesGroup[]>;

  public currentDate: IDateSlot;
  public selectedSlots: Map<IDateSlot, ITimeSlot[]> = new Map();

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

  public onSelectDate(date: IDateSlot): void {
    this.currentDate = date;
  }

  public onSelectTime(time: ITimeSlot): void {
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

  public onRemoveSlot(date: IDateSlot, slot: ITimeSlot): void {
    const timeSlots = this.selectedSlots.get(date).filter(i => i !== slot);
    this.selectedSlots.set(date, timeSlots);
    this.removeKeyIfEmpty(date);
  }

  private removeKeyIfEmpty(key: IDateSlot): void {
    const hasNoItemsPerKey = !this.selectedSlots.get(key)?.length;
    if (hasNoItemsPerKey) {
      this.selectedSlots.delete(key);
    }
  }

  public onConfirm(): void {
    const dateTimeEntries = Array.from(this.selectedSlots.entries());
    const res: IDateSlot[] = dateTimeEntries.map(([slotDate, timeSlots]: [IDateSlot, ITimeSlot[]]) => {
      return {
        date: slotDate.date,
        timeSlots
      };
    });
    this.dialog.close(res);
  }

}

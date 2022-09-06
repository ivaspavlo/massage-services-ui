import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogConfig, DialogRef } from '@app/modules/ui/dialog';
import { IProduct } from '../../interfaces';


@Component({
  selector: 'app-select-date-modal',
  templateUrl: './select-date-modal.component.html',
  styleUrls: ['./select-date-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectDateModalComponent implements OnInit {

  public product: IProduct;
  public bookingData: any[] = [
    {
      month: 'September',
      dates: [
        {
          day: 1,
          uiName: '01.09',
          dateString: 'Tue Sep 01 2022',
          time: [
            { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
            { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
            { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
            { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
          ]
        }, {
          day: 2,
          uiName: '02.09',
          dateString: 'Tue Sep 02 2022',
          time: [
            { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
            { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
            { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
            { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
          ]
        }, {
          day: 3,
          uiName: '03.09',
          dateString: 'Tue Sep 03 2022',
          time: [
            { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
            { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
            { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
            { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
          ]
        }, {
          day: 4,
          uiName: '04.09',
          dateString: 'Tue Sep 04 2022',
          time: [
            { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
            { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
            { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
            { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
          ]
        }, {
          day: 5,
          uiName: '05.09',
          dateString: 'Tue Sep 05 2022',
          time: [
            { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
            { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
            { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
            { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
          ]
        }, {
          day: 6,
          uiName: '06.09',
          dateString: 'Tue Sep 06 2022',
          time: [
            { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
            { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
            { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
            { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
          ]
        }, {
          day: 7,
          uiName: '07.09',
          dateString: 'Tue Sep 07 2022',
          time: [
            { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
            { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
            { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
            { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
          ]
        }, {
          day: 8,
          uiName: '08.09',
          dateString: 'Tue Sep 08 2022',
          time: [
            { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
            { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
            { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
            { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
          ]
        }, {
          day: 9,
          uiName: '09.09',
          dateString: 'Tue Sep 09 2022',
          time: [
            { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
            { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
            { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
            { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
          ]
        }, {
          day: 10,
          uiName: '10.09',
          dateString: 'Tue Sep 10 2022',
          time: [
            { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
            { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
            { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
            { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
          ]
        }
      ]
    }
  ]

  public currentDate: any;
  public selectedSlots: Map<string, any> = new Map();

  get hasSelectedItems() {
    return Array.from(this.selectedSlots.values())?.length;
  }

  constructor(
    public config: DialogConfig,
    public dialog: DialogRef
  ) { }

  ngOnInit(): void {
    this.product = this.config.data;
  }

  public onSelectDate(date: any): void {
    this.currentDate = date;
  }

  public onSelectTime(time: any): void {
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

    const hasNoItemsPerKey = !this.selectedSlots.get(this.currentDate)?.length;
    if (hasNoItemsPerKey) {
      this.selectedSlots.delete(this.currentDate);
    }
  }

}

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
          time: [
            { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
            { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
            { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
            { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
          ]
        }, {
          day: 2,
          time: [
            { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
            { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
            { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
            { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
          ]
        }, {
          day: 3,
          time: [
            { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
            { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
            { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
            { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
          ]
        }, {
          day: 4,
          time: [
            { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
            { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
            { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
            { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
          ]
        }, {
          day: 5,
          time: [
            { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
            { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
            { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
            { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
          ]
        }, {
          day: 6,
          time: [
            { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
            { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
            { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
            { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
          ]
        }, {
          day: 7,
          time: [
            { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
            { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
            { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
            { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
          ]
        }, {
          day: 8,
          time: [
            { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
            { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
            { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
            { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
          ]
        }, {
          day: 9,
          time: [
            { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
            { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
            { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
            { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
          ]
        }, {
          day: 10,
          time: [
            { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
            { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
            { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
            { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
          ]
        }
      ]
    }, {
      month: 'October',
      dates: [
        {
          day: 1,
          time: [
            { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
            { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
            { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
            { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
          ]
        }, {
          day: 2,
          time: [
            { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
            { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
            { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
            { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
          ]
        }, {
          day: 3,
          time: [
            { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
            { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
            { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
            { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
          ]
        }, {
          day: 4,
          time: [
            { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
            { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
            { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
            { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
          ]
        }, {
          day: 5,
          time: [
            { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
            { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
            { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
            { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
          ]
        }, {
          day: 6,
          time: [
            { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
            { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
            { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
            { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
          ]
        }, {
          day: 7,
          time: [
            { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
            { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
            { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
            { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
          ]
        }, {
          day: 8,
          time: [
            { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
            { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
            { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
            { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
          ]
        }, {
          day: 9,
          time: [
            { start: { hour: '10', minute: '00' }, end: { hour: '11', minute: '00' } },
            { start: { hour: '11', minute: '00' }, end: { hour: '13', minute: '00' } },
            { start: { hour: '15', minute: '00' }, end: { hour: '16', minute: '00' } },
            { start: { hour: '18', minute: '00' }, end: { hour: '19', minute: '00' } }
          ]
        }, {
          day: 10,
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
  public selectedSlots: Set<any> = new Set();

  constructor(
    public config: DialogConfig,
    public dialog: DialogRef
  ) { }

  ngOnInit(): void {
    this.product = this.config.data;
  }

  public onSelectDate(month: string, date: any): void {
    this.currentDate = { month, ...date };
  }

  public onSelectTime(time: any): void {
    const slot = {
      month: this.currentDate.month,
      day: this.currentDate.day,
      ...time
    };
    this.selectedSlots.add(slot);
  }

}

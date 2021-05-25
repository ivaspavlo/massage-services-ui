
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IAngularMyDpOptions } from 'angular-mydatepicker';


@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker-container.component.html',
  styleUrls: ['./date-picker-container.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatePickerContainerComponent implements OnInit {
  
  @Input() options: IAngularMyDpOptions = {
    stylesData: {
      selector: 'dp1',
      styles: `
        .dp1 .yogaDates {
           background-color: beige;
           color: darkviolet; 
           box-shadow: inset 0 0 0 1px #66afe9;
           font-weight: bold;
           border-radius: 8px;
        }

        .dp1 .karateDates {
           background: repeating-linear-gradient(-45deg, red 7px, 
                   #ccc 8px, transparent 7px, transparent 14px);
           color: darkgreen; 
           font-weight: bold;
        } 

        .dp1 .boxingDates {
           background: repeating-linear-gradient(45deg, green 7px, 
                   #ccc 8px, lightgreen 7px, transparent 14px);
           color: fuchsia;
           font-weight: bold; 
        } 

        .dp1 .yogaAndKarateDates {
           background: repeating-linear-gradient(-45deg, #ccc 7px, 
                  #ccc 8px, transparent 7px, transparent 14px);
           color: red;
           font-weight: bold;  
        }  
      `
  },
  markDates: [
   {
      // yoga dates
      dates: [{day: 1, month: 6, year: 2020}, {day: 6, month: 6, year: 2020}],
      styleClass: 'yogaDates'
   },
   {
      // karate dates
      dates: [{day: 2, month: 6, year: 2020}, {day: 4, month: 6, year: 2020}],
      styleClass: 'karateDates'
   },
   {
      // boxing dates
      dates: [{day: 26, month: 6, year: 2020}, {day: 27, month: 6, year: 2020}],
      styleClass: 'boxingDates'
   },
   {
      // yoga and karate dates
      color: 'red',     // this shows red triangle on top-left of the date
      dates: [{day: 17, month: 6, year: 2020}, {day: 18, month: 6, year: 2020}],
      styleClass: 'yogaAndKarateDates'
   }],
  }
  
  public model: any;

  constructor() { }

  ngOnInit(): void { }

}

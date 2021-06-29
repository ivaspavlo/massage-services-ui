
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker-container.component.html',
  styleUrls: ['./date-picker-container.component.scss']
})
export class DatePickerContainerComponent implements OnInit {
   
  @Input() datePickerConfig: any;

  constructor() { }

  ngOnInit(): void { }

}

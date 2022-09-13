import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.scss', '../info-container/info-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscountsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

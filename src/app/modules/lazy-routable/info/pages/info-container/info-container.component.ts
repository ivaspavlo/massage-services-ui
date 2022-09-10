import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-info-container',
  templateUrl: './info-container.component.html',
  styleUrls: ['./info-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

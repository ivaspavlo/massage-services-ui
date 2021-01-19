import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-not-found-container',
  templateUrl: './not-found-container.component.html',
  styleUrls: ['./not-found-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-ng-menu',
  templateUrl: './ng-menu.component.html',
  styleUrls: ['./ng-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}


import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';


@Component({
  selector: 'app-desktop-menu',
  templateUrl: './desktop-menu.component.html',
  styleUrls: ['./desktop-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DesktopMenuComponent implements OnInit {

  @Input() items: string[];
  @Input() isShrinked = false;

  constructor() { }

  ngOnInit(): void { }

}

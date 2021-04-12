
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-desktop-menu',
  templateUrl: './desktop-menu.component.html',
  styleUrls: ['./desktop-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DesktopMenuComponent implements OnInit {

  @Input() public items: { name: string; href: string; }[];
  @Input() public isShrinked = false;
  @Output() public showLoginModal: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

}

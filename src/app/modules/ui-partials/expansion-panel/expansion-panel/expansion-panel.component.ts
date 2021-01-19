
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';


@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpansionPanelComponent implements OnInit {

  @Input() items: string[] = [];
  @Input() isOpen = false;

  constructor() { }

  ngOnInit(): void { }

}

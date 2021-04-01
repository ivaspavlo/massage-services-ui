
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';


@Component({
  selector: 'app-bottom-panel',
  templateUrl: './bottom-panel.component.html',
  styleUrls: ['./bottom-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BottomPanelComponent implements OnInit {

  @Input() socialButtons: { name: string, link: string; };

  constructor() { }

  ngOnInit(): void { }

}

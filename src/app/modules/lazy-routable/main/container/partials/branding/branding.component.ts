
import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-branding',
  templateUrl: './branding.component.html',
  styleUrls: ['./branding.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandingComponent implements OnInit {
  
  @Input() isVisible: boolean = true;
  @Output() scrollDown: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

}


import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-brand-services',
  templateUrl: './brand-services.component.html',
  styleUrls: ['./brand-services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandServicesComponent implements OnInit {

  @Input() productCards: { background: string; title: string; info: string; button?: string; }[];
  @Input() quotes: object;

  constructor() { }

  ngOnInit() { }

}

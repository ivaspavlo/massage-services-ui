
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  @Input() socialButtons: { name: string; link: string; }[];
  @Input() footerItems: { title: string; items: { uiName: string; link: string; }[] }[];

  constructor() { }

  ngOnInit(): void { }

}

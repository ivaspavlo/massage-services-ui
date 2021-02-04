
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-brand-services',
  templateUrl: './brand-services.component.html',
  styleUrls: ['./brand-services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandServicesComponent implements OnInit {

  public isVisible: boolean = false;

  constructor() { }

  ngOnInit() { }

}

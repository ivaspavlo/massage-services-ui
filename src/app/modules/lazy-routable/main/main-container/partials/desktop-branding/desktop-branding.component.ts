
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-desktop-branding',
  templateUrl: './desktop-branding.component.html',
  styleUrls: ['./desktop-branding.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DesktopBrandingComponent implements OnInit {

  public isVisible = false;

  constructor() { }

  ngOnInit(): void { }

}

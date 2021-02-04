
import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'app-desktop-branding',
  templateUrl: './desktop-branding.component.html',
  styleUrls: ['./desktop-branding.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DesktopBrandingComponent {

  public isVisible = false;

  constructor() { }

  public onVisibilityToggle(isVisible: boolean): void {
    this.isVisible = isVisible;
  }

}


import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';


interface IAppNgButton {
  name: string;
  type?: string;
  size?: string;
  color?: string;
}

@Component({
  selector: 'app-ng-button',
  templateUrl: './ng-button.component.html',
  styleUrls: ['./ng-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgButtonComponent implements OnInit {

  @Input() disabled: boolean;

  @Input() set settings({ name, size, color, type }: IAppNgButton) {
    this.name = name;
    this.type = this.getType(type);
    this.size = this.getSize(size);
    this.color = this.getColor(color);
  }

  public buttonTypes = { flat: 'flat', raised: 'raised', stroked: 'stroked', icon: 'icon' };
  public buttonSizes = { sm: 'button-size-sm', md: 'button-size-md', lg: 'button-size-lg', xl: 'button-size-xl' };
  public buttonColors = { primary: 'primary', accent: 'accent', warn: 'warn' };

  public name: string;
  public size: string;
  public color: string;
  public type: string;

  constructor() { }

  ngOnInit(): void { }

  private getType(type: string): string {
    return this.buttonTypes[type] || this.buttonTypes.flat;
  }

  private getColor(color: string): string {
    return this.buttonColors[color] || '';
  }

  private getSize(size: string): string {
    return this.buttonSizes[size] || '';
  }

}

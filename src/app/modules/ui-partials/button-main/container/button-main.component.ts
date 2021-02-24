
import { Component, OnInit, ChangeDetectionStrategy, Input, Renderer2, ViewChild, ElementRef, HostListener } from '@angular/core';


@Component({
  selector: 'app-button-main',
  templateUrl: './button-main.component.html',
  styleUrls: ['./button-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonMainComponent implements OnInit {

  @ViewChild('button') button: ElementRef;

  @Input() filled = false;
  @Input() title = 'button';
  @Input() isValid: boolean | null = null;

  public shakeIfInvalid = false;
  private invalidClassName = 'invalid';

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.shakeIfInvalid = this.isValid !== null;
  }

  public onClick(): void {
    this.renderer.addClass(this.button.nativeElement, this.invalidClassName);
    setTimeout(() => {
      this.renderer.removeClass(this.button.nativeElement, this.invalidClassName);
    }, 1000);
  }

}

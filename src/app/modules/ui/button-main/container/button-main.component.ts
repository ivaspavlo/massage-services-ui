
import { Component, OnInit, ChangeDetectionStrategy, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';


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
  @Input() invalid: boolean = false;

  private invalidClassName = 'invalid';

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void { }

  public onClick(): void {
    if (this.invalid && !this.button.nativeElement.classList.contains(this.invalidClassName)) {
      this.renderer.addClass(this.button.nativeElement, this.invalidClassName);
      setTimeout(() => {
        this.renderer.removeClass(this.button.nativeElement, this.invalidClassName);
      }, 1000);
    }
  }

}

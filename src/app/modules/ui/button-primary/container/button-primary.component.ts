
import { Component, OnInit, ChangeDetectionStrategy, Input, Renderer2, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonPrimaryComponent implements OnInit {

  @ViewChild('button') button: ElementRef;

  @Input() filled = false;
  @Input() invalid = false;
  @Input() title = 'button';
  @Input() routerLink: string;

  private invalidClassName = 'invalid';

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void { }

  public onClick(event: MouseEvent): void {
    if (this.routerLink) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.animate();
  }
  
  private animate(): void {
    if (this.invalid && !this.button.nativeElement.classList.contains(this.invalidClassName)) {
      this.renderer.addClass(this.button.nativeElement, this.invalidClassName);
      setTimeout(() => {
        this.renderer.removeClass(this.button.nativeElement, this.invalidClassName);
      }, 1000);
    }
  }

}

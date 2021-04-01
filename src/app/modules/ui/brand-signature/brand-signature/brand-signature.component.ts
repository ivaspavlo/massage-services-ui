
import { Component, ChangeDetectionStrategy, ViewChild, ElementRef, Renderer2, Input } from '@angular/core';


@Component({
  selector: 'app-brand-signature',
  templateUrl: './brand-signature.component.html',
  styleUrls: ['./brand-signature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandSignatureComponent {

  @Input() durationSec = 1;
  @Input() animationDelay = 1;
  @ViewChild('svg') svg: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.start();
  }

  private start(): void {

    // reset the animation
    this.renderer.addClass(this.svg.nativeElement, 'animated');

    // select all path elements
    const paths = this.svg.nativeElement.querySelectorAll('path');

    // prepare path length variable
    let len = 0;

    // prepare animation delay length variable
    let delay = this.animationDelay;

    // escape if no elements found
    if (!paths.length) {
      return;
    }

    // set duration in seconds of animation to default if not set
    const totalDuration = this.durationSec;

    // calculate the full path length
    paths.forEach((path) => {
      const totalLen = path.getTotalLength();
      len += totalLen;
    });

    paths.forEach((path) => {
      const pathElem = path;

      // get current path length
      const totalLen = path.getTotalLength();

      // calculate current animation duration
      const duration = totalLen / len * totalDuration;

      // set animation duration and delay
      pathElem.style.animationDuration = `${duration < 0.02 ? 0.02 : duration}s`;
      pathElem.style.animationDelay = `${delay}s`;

      // set dash array and offset to path length - this is how you hide the line
      pathElem.setAttribute('stroke-dasharray', totalLen);
      pathElem.setAttribute('stroke-dashoffset', totalLen);

      // set delay for the next path - added .2 seconds to make it more realistic
      delay += duration + 0.02;
    })

    // start animation
    this.renderer.addClass(this.svg.nativeElement, 'animated');
  }

}


import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { ResizeObserver } from '@juggle/resize-observer';
import LocomotiveScroll from 'locomotive-scroll';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  @ViewChild('scrollContent') scrollContent: ElementRef;
  
  public title = 'm1';
  public scroll: LocomotiveScroll;
  
  constructor(@Inject(DOCUMENT) private document: Document) {}
  
  ngOnInit() {
    this.scroll = new LocomotiveScroll({
      el: this.document.querySelector('[data-scroll-container]'),
      smooth: true,
      getDirection: true
    });
    const test = this.document.querySelector('[data-scroll-container]');
    debugger;
  }
  
  ngAfterViewInit() {
    const ro = new ResizeObserver((entries, observer) => {
      console.log('resize')
      entries.forEach((entry, index) => {
        const { inlineSize: width, blockSize: height } = entry.contentBoxSize[0];
        if(this.scroll) {
          debugger;
          this.scroll.update();
        }
      });
    });

    ro.observe(this.scrollContent.nativeElement);
  }
  
}

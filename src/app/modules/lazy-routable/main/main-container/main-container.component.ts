
import { Component, OnInit, ChangeDetectionStrategy, ElementRef, ViewChild, Inject } from '@angular/core';
import { MOCK_PRODUCTS, MOCK_QUOTES } from '../constants';

import { ResizeObserver } from '@juggle/resize-observer';
import LocomotiveScroll from 'locomotive-scroll';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainContainerComponent implements OnInit {
  
  @ViewChild('scrollContent') scrollContent: ElementRef;
  
  public title = 'm1';
  public scroll: LocomotiveScroll;

  public productCards = MOCK_PRODUCTS;
  public quotes = MOCK_QUOTES;

  public isScrollBtnVisible = true;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    this.scroll = new LocomotiveScroll({
      el: this.document.querySelector('[data-scroll-container]'),
      smooth: true,
      getDirection: true
    });
    this.scroll.on('scroll', (res) => {
      console.log(res)
    })
  }
  
  ngAfterViewInit() {
    const ro = new ResizeObserver((entries, observer) => {
      console.log('resize')
      entries.forEach((entry, index) => {
        const { inlineSize: width, blockSize: height } = entry.contentBoxSize[0];
        if (this.scroll) {
          this.scroll.update();
        }
      });
    });

    ro.observe(this.scrollContent.nativeElement);
  }

}

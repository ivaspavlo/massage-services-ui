
import { Component, OnInit, ChangeDetectionStrategy, ElementRef, ViewChild, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import LocomotiveScroll from 'locomotive-scroll';

import { Observable, Subject } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';

import { MOCK_PRODUCTS, MOCK_QUOTES } from '../constants';


@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainContainerComponent implements OnInit {
  
  @ViewChild('scrollContent') scrollContent: ElementRef;
  
  public productCards = MOCK_PRODUCTS;
  public quotes = MOCK_QUOTES;
  public scroll: LocomotiveScroll;
  public isBelowTreshold$: Observable<boolean>;
  
  private scrollListener$: Subject<any> = new Subject();
  private locomotiveScrollEventName = 'scroll';
  private locomotiveScrollContainerSelector = '[data-scroll-container]';

  // @ts-ignore: https://github.com/ant-design/ant-design/issues/13405
  private resizeObserver: ResizeObserver;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    this.initLocomotiveScroll();
    this.initIsBelowTreshold();
    this.initResizeObserver();
  }
  
  ngAfterViewInit(): void {
    this.listenToScroll();
    this.listenToResize();
  }
  
  private listenToScroll(): void {
    this.scroll.on(this.locomotiveScrollEventName, (res: any) => this.scrollListener$.next(res));
  }
  
  private initIsBelowTreshold(): void {
    this.isBelowTreshold$ = this.scrollListener$.pipe(
      map((res: any) => res.scroll.y > this.document.documentElement.clientHeight / 2),
      throttleTime(200)
    );
  }
  
  private initLocomotiveScroll(): void {
    this.scroll = new LocomotiveScroll({
      el: this.document.querySelector(this.locomotiveScrollContainerSelector),
      smooth: true
    });
  }
  
  private initResizeObserver(): void {
    // @ts-ignore: https://github.com/ant-design/ant-design/issues/13405
    this.resizeObserver = new ResizeObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        const { inlineSize: width, blockSize: height } = entry.contentBoxSize[0];
        if (this.scroll) {
          this.scroll.update();
        }
      });
    });
  }
  
  private listenToResize(): void {
    this.resizeObserver.observe(this.scrollContent.nativeElement);
  }
  
  ngOnDestroy(): void {
    this.scroll.destroy();
    this.resizeObserver.disconnect();
  }
}

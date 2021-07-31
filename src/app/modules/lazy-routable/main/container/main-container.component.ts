
import { Component, OnInit, ChangeDetectionStrategy, ElementRef, ViewChild, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import LocomotiveScroll from 'locomotive-scroll';

import { Observable, Subject } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';

import { DialogService } from '@app/modules/ui/dialog/services';

import { MOCK_PRODUCTS, MOCK_QUOTES, MOCK_CERTIFICATES, MOCK_SLIDES } from '../constants';
import { QuoteModalComponent } from '../modals/quote-modal/quote-modal.component';
import { CertModalComponent, InfoModalComponent } from '../modals';
import { ICertificate } from '../interfaces';


@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainContainerComponent implements OnInit {
  
  @ViewChild('scrollContainer') scrollContainer: ElementRef;
  
  public productCards = MOCK_PRODUCTS;
  public quotes = MOCK_QUOTES;
  public certificates = MOCK_CERTIFICATES;
  public slides = MOCK_SLIDES;

  public scroll: LocomotiveScroll;
  public isBelowTreshold$: Observable<boolean>;
  
  private scrollListener$: Subject<any> = new Subject();
  private locomotiveScrollEventName = 'scroll';
  private locomotiveScrollContainerSelector = '[data-scroll-container]';

  // @ts-ignore: https://github.com/ant-design/ant-design/issues/13405
  private resizeObserver: ResizeObserver;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.initLocomotiveScroll();
    this.initTresholds();
    this.initResizeObserver();
  }
  
  ngAfterViewInit(): void {
    this.listenToScroll();
    this.listenToResize();
  }
  
  // PUBLIC METHODS
  
  public onScrollDown(): void {
    this.scroll.scrollTo(this.document.documentElement.clientHeight);
  }
  
  public onShowQuoteModal(): void {
    this.dialogService.open(QuoteModalComponent);
  }
  
  public onScrollTop(): void {
    this.scroll.scrollTo(0);
  }
  
  public onCertClick(cert: ICertificate): void {
    this.dialogService.open(CertModalComponent, cert);
  }
  
  public onShowInfo(): void {
    this.dialogService.open(InfoModalComponent);
  }
  
  // PRIVATE METHODS
  
  private listenToScroll(): void {
    this.scroll.on(this.locomotiveScrollEventName, (res: any) => this.scrollListener$.next(res));
  }
  
  private initTresholds(): void {
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
        if (this.scroll) {
          this.scroll.update();
        }
      });
    });
  }
  
  private listenToResize(): void {
    this.resizeObserver.observe(this.scrollContainer.nativeElement);
  }
  
  ngOnDestroy(): void {
    this.scroll.destroy();
    this.resizeObserver.disconnect();
  }
}


import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IQuote } from '../interfaces';


@Component({
  selector: 'app-slider-quote',
  templateUrl: './slider-quote.component.html',
  styleUrls: ['./slider-quote.component.scss']
})
export class SliderQuoteComponent implements OnInit {

  @Input() quotes: IQuote[];
  @Input() hideControls = true;
  @Input() intervalMs = 5000;
  @ViewChild('slide') slide: ElementRef;

  public currentQuoteIndex = 0;
  private quoteWidthPx = 350;
  private componentDestroyed$: Subject<void> = new Subject();

  constructor(
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.animateSlider();
  }

  public onBtnClick(index: number): void {
    this.currentQuoteIndex = index;
    this.moveSlide();
  }

  private animateSlider(): void {
    interval(this.intervalMs).pipe(
      takeUntil(this.componentDestroyed$)
    ).subscribe(_ => {
      this.currentQuoteIndex++;
      if (this.currentQuoteIndex > this.quotes.length - 1) {
        this.currentQuoteIndex = 0;
      }
      this.moveSlide();
    });
  }

  private moveSlide() {
    this.renderer.setStyle(this.slide.nativeElement, 'transform', `translateX(-${this.currentQuoteIndex * this.quoteWidthPx}px)`);
    this.cdr.detectChanges();
  }

  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
  }

}

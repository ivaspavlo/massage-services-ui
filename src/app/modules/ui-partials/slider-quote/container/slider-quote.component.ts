
import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


interface IQuote {
  id: string;
  text: string;
  author: string;
  name: string;
  about: string;
}

interface IQuoteHexColors {
  background: string;
  border: string;
  text: string;
  author: string;
  about: string;
  controls: string;
}

@Component({
  selector: 'app-slider-quote',
  templateUrl: './slider-quote.component.html',
  styleUrls: ['./slider-quote.component.scss']
})
export class SliderQuoteComponent implements OnInit {

  @Input() quotes: IQuote[];
  @Input() colours: IQuoteHexColors;
  @Input() hideControls = true;

  @ViewChild('slide') slide: ElementRef;

  public quoteWidthRem = 25;
  private currentQuoteIndex = 0;
  private componentDestroyed$: Subject<void> = new Subject();

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.animateSlider();
  }

  private animateSlider(): void {
    interval(4000).pipe(
      takeUntil(this.componentDestroyed$)
    ).subscribe(_ => {
      this.currentQuoteIndex++;
      if (this.currentQuoteIndex > 1) {
        this.currentQuoteIndex = 0;
      }
      this.renderer.setStyle(this.slide.nativeElement, 'transform', `translateX(-${this.currentQuoteIndex * this.quoteWidthRem}rem)`);
    });
  }

  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
  }

}

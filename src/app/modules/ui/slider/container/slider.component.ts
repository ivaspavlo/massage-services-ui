
import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';

import { scaleIn, scaleOut } from './slider.animations';
import { ISlide } from '../interfaces';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideAnimation', [
      transition("void => *", [useAnimation(scaleIn, {params: { time: '500ms' }} )]),
      transition("* => void", [useAnimation(scaleOut, {params: { time: '500ms' }})]),
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent {
  
  @Input() slides: ISlide[];
  @Input() animationType = scaleIn;
  @Input() intervalMs = 3000;
  @Input() autoChangeOff = false;

  public currentSlide = 0;
  private changeIntervalId = null;

  constructor(private cdr: ChangeDetectorRef) { }
  
  ngOnInit(): void {
    this.preloadImages();
    this.startSliding();
  }

  public onPreviousClick(): void {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  public onNextClick(): void {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    this.cdr.detectChanges();
  }

  public preloadImages(): void {
    for (const slide of this.slides) {
      new Image().src = slide.src;
    }
  }
  
  public startSliding(): void {
    debugger;
    if (!this.autoChangeOff) {
      this.changeIntervalId = setInterval(this.onNextClick.bind(this), this.intervalMs);
    }
  }
  
  public stopSliding(): void {
    debugger;
    if (this.changeIntervalId) {
      clearInterval(this.changeIntervalId);
    }
  }

}

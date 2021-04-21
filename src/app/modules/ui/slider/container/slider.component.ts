
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';

import { AnimationType, fadeIn, fadeOut, scaleIn, scaleOut } from './slider.animations';
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

  currentSlide = 0;

  constructor() {}

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

  ngOnInit() {
    this.preloadImages();
  }

  preloadImages() {
    for (const slide of this.slides) {
      new Image().src = slide.src;
    }
  }

}

// https://medium.com/showpad-engineering/angular-animations-lets-create-a-carousel-with-reusable-animations-81c0dd8847e8

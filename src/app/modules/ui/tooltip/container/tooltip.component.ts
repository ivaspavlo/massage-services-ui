
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, Inject, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { ContentTypes, Positions } from '../constants';
import { ITooltipConfig } from '../interfaces';


@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent implements OnInit, AfterViewInit {
  
  @ViewChild('container', {read: ElementRef}) private container: ElementRef;
  
  public top: string;
  public left: string;
  public hasTemplate = false;
  private offsetPx = 10;

  constructor(
    @Inject('tooltipConfig') private config: ITooltipConfig,
    @Inject(DOCUMENT) private document: Document,
    private cdr: ChangeDetectorRef
  ) { }
  
  ngOnInit() {
    this.hasTemplate = this.config.contentType !== ContentTypes.string;
  }
  
  ngAfterViewInit(): void {
    this.setPosition();
    this.cdr.detectChanges();
  }
  
  private setPosition(): void {
    const { offsetTop: hostTop, offsetLeft: hostLeft } = this.config.host;
    const { width: hostWidth, height: hostHeight } = this.config.host.getBoundingClientRect();
    const { height: tooltipHeight, width: tooltipWidth } = this.container.nativeElement.getBoundingClientRect();

    this.top = this.getVerticalPosition(this.config.position === Positions.below, hostTop, hostHeight, tooltipHeight);
    this.left = this.getHorisontalPosition(this.config.position === Positions.right, hostLeft, hostWidth, tooltipWidth);
  }
  
  private getVerticalPosition(isAbove: boolean, hostTop: number, hostHeight: number, tooltipHeight: number): string {
    const positionAbove = hostTop - tooltipHeight - this.offsetPx;
    const positionBelow = hostTop + hostHeight + this.offsetPx;
    const fitsAbove = this.fitsVertical(positionAbove, tooltipHeight);
    const fitsBelow = this.fitsVertical(positionBelow, tooltipHeight);
    return isAbove ?
      `${fitsAbove ? positionAbove : positionBelow}px` :
      `${fitsBelow ? positionBelow : positionAbove}px`;
  }
  
  private getHorisontalPosition(isLeft: boolean, hostLeft: number, hostWidth: number, tooltipWidth: number): string {
    const positionToLeft = hostLeft - tooltipWidth - this.offsetPx;
    const positionToRight = hostLeft + hostWidth + this.offsetPx;
    const fitsLeft = this.fitsHorisontal(positionToLeft, tooltipWidth);
    const fitsRight = this.fitsHorisontal(positionToRight, tooltipWidth);
    return isLeft ?
      `${fitsLeft ? positionToLeft : positionToRight}px` :
      `${fitsRight ? positionToRight : positionToLeft}px`;
  }
  
  private fitsVertical(tooltipTop: number, tooltipHeight: number): boolean {
    return tooltipTop >= 0 && tooltipTop + tooltipHeight <= this.document.documentElement.clientHeight;
  }
  
  private fitsHorisontal(tooltipLeft: number, tooltipWidth: number): boolean {
    return tooltipLeft >= 0 && tooltipLeft + tooltipWidth <= this.document.documentElement.clientWidth;
  }

}

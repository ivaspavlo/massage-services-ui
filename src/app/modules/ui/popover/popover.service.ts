
import { ConnectionPositionPair, Overlay, OverlayConfig, PositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';

import { PopoverContent, PopoverRef } from './popover.ref';
import { PopoverComponent } from './popover/popover.component';
import { PopoverInjector } from './popover.injector';


export type PopoverParams = {
  origin: HTMLElement;
  content: PopoverContent;
  data?: any;
  width?: string | number;
  height?: string | number;
}
 
@Injectable()
export class PopoverService {
  
  constructor(
    private overlay: Overlay,
    private injector: Injector
  ) { }
 
  public open({ origin, content, data, width, height }: PopoverParams) {
    const overlayRef = this.overlay.create(this.getOverlayConfig({ origin, width, height }));
    const popoverRef = new PopoverRef(overlayRef, content, data);

    const injector = this.createInjector(popoverRef, this.injector);
    overlayRef.attach(new ComponentPortal(PopoverComponent, null, injector));

    return popoverRef;
  }
  
  private createInjector(popoverRef: PopoverRef, injector: Injector) {
    const tokens = new WeakMap([[PopoverRef, popoverRef]]);
    return new PopoverInjector(injector, tokens);
  }
 
  private getOverlayConfig({ origin, width, height }): OverlayConfig {
    return new OverlayConfig({
      width,
      height,
      hasBackdrop: false,
      backdropClass: 'popover-backdrop',
      positionStrategy: this.getOverlayPosition(origin),
      scrollStrategy: this.overlay.scrollStrategies.reposition()
    });
  }
  
  private getOverlayPosition(origin: HTMLElement): PositionStrategy {
    if (!origin) {
      return this.overlay.position().global().centerHorizontally().centerVertically();
    } else {
      return this.overlay.position()
        .flexibleConnectedTo(origin)
        .withPositions(this.getPositions())
        .withPush();
    }
  }
   
  private getPositions(): ConnectionPositionPair[] {
    return [
      {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom'
      }, {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
      }
    ];
  }
 
}

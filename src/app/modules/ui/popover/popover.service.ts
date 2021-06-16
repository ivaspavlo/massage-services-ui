import { Injectable, Injector } from '@angular/core';
import { Overlay, ConnectionPositionPair, PositionStrategy, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { PopoverRef } from './popover-ref';
import { PopoverParams } from './interfaces';
import { PopoverInjector } from './popover.injector';
import { PopoverComponent } from './container/popover.component';


@Injectable()
export class PopoverService {

  constructor(
    private overlay: Overlay,
    private injector: Injector
  ) { }

  public open<T>({ origin, content, data, width, height, position }: PopoverParams<T>): PopoverRef<T> {
    const overlayRef = this.overlay.create(this.getOverlayConfig({ origin, width, height, position }));
    const popoverRef = new PopoverRef<T>(overlayRef, content, data as T);

    const injector = this.createInjector(popoverRef, this.injector);
    overlayRef.attach(new ComponentPortal(PopoverComponent, null, injector));

    return popoverRef;
  }

  private getOverlayConfig({ origin, width, height, position }: any): OverlayConfig {
    return new OverlayConfig({
      hasBackdrop: true,
      width,
      height,
      positionStrategy: this.getOverlayPosition(origin, position),
      scrollStrategy: this.overlay.scrollStrategies.reposition()
    });
  }

  private getOverlayPosition(origin?: HTMLElement, positionConfig?: Partial<ConnectionPositionPair>): PositionStrategy {
    if (origin) {
      return this.overlay.position()
        .flexibleConnectedTo(origin)
        .withPositions([{
            originX: 'start',
            originY: 'top',
            overlayX: 'center',
            overlayY: 'top',
            ...(positionConfig || {})
        }])
        .withFlexibleDimensions(false)
    } else {
      return this.overlay.position()
        .global()
        .centerHorizontally()
        .centerVertically()
    }
  }

  private createInjector(popoverRef: PopoverRef, injector: Injector) {
    const tokens = new WeakMap([[PopoverRef, popoverRef]]);
    return new PopoverInjector(injector, tokens);
  }

}

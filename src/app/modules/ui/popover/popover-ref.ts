import { OverlayRef } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';
import { PopoverCloseEvent, PopoverContent } from './interfaces';


export class PopoverRef<T = any> {
  private afterClosed = new Subject<PopoverCloseEvent<T>>();
  afterClosed$ = this.afterClosed.asObservable();

  constructor(public overlay: OverlayRef,
    public content: PopoverContent,
    public data: T) {
    overlay.backdropClick().subscribe(() => {
      this._close('backdropClick', undefined);
    });
  }

  close(data?: T) {
    this._close('close', data);
  }

  private _close(type: PopoverCloseEvent['type'], data?: T) {
    this.overlay.dispose();
    this.afterClosed.next({ type, data } as any);
    this.afterClosed.complete();
  }
}
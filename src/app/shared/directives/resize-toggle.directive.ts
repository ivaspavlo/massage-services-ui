
import { Directive, Inject, OnInit, OnDestroy, ViewContainerRef, TemplateRef, Input, ChangeDetectorRef } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { distinctUntilChanged, map, startWith, takeUntil } from 'rxjs/operators';

import { WINDOW } from '@app/core/providers';
import { BootstrapBreakpoints } from '@app/shared/constants';


type Breakpoint = 'sm' | 'md' | 'lg' | 'xl';

@Directive({
  selector: '[appResizeToggle]'
})
export class ResizeToggleDirective implements OnInit, OnDestroy {

  @Input('appResizeToggle') set breakpointName([ min, max ]: [Breakpoint, Breakpoint]) {
    this.min = BootstrapBreakpoints[min] || BootstrapBreakpoints.md;
    this.max = BootstrapBreakpoints[max] || null;
  };
  private min: number;
  private max: number;
  private directiveDestroyed$: Subject<void> = new Subject();

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private cdr: ChangeDetectorRef,
    @Inject(WINDOW) private window: Window
  ) { }

  ngOnInit() {
    if (this.window) {
      this.listenToResize();
    }
  }

  private listenToResize(): void {
    fromEvent(this.window, 'resize').pipe(
      map((event: Event) => this.isHidden((event.currentTarget as Window).innerWidth)),
      startWith(this.isHidden(this.window.innerWidth)),
      distinctUntilChanged(),
      takeUntil(this.directiveDestroyed$)
    ).subscribe((isHidden: boolean) => {
      isHidden ?
        this.viewContainer.createEmbeddedView(this.templateRef) :
        this.viewContainer.clear();
      this.cdr.detectChanges();
    });
  }

  private isHidden(innerWidth: number): boolean {
    return this.max && innerWidth >= this.max || innerWidth < this.min;
  }

  ngOnDestroy() {
    this.directiveDestroyed$.next();
    this.directiveDestroyed$.complete();
  }

}

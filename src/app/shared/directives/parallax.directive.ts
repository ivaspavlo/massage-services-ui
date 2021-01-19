
import { Directive, Input, ElementRef, Inject, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { fromEvent, Subject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';


@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective implements OnInit, OnDestroy {

  @Input('appParallax') ratio = 1;
  private initialTop = 0;
  private directiveDestroyed$: Subject<void> = new Subject();

  constructor(
    private host: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() {
    this.initialTop = this.host.nativeElement.getBoundingClientRect().top;
    this.listenScroll();
  }

  private listenScroll() {
    fromEvent(this.document, 'scroll').pipe(
      map(_ => this.document.documentElement.scrollTop),
      startWith(this.document.documentElement.scrollTop),
      takeUntil(this.directiveDestroyed$)
    ).subscribe((scrollTop: number) => {
      this.renderer.setStyle(this.host.nativeElement, 'transform', `translateY(${(this.initialTop - (scrollTop * this.ratio))}px)`);
      // this.host.nativeElement.style.top = `${(this.initialTop - (scrollTop * this.ratio))}px`;
    });
  }

  ngOnDestroy() {
    this.directiveDestroyed$.next();
    this.directiveDestroyed$.complete();
  }

}

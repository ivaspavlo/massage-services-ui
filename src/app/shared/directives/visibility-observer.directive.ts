
import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';


interface IVisibilityObserverSettings {
  threshold?: number;
  root?: HTMLElement;
  rootMargin?: number;
  emitOnce?: boolean;
}

@Directive({
  selector: '[visibilityObserver]'
})
export class VisibilityObserverDirective implements OnInit, AfterViewInit, OnDestroy {

  @Input() set visibilityObserver(settings: IVisibilityObserverSettings) {
    if (settings) {
      Object.keys(settings).forEach(key => this[key] = settings[key]);
    }
  }
  @Output() visible = new EventEmitter<boolean>();

  private root: HTMLElement | null = null;
  private rootMargin = 0;
  private threshold = 0;
  private emitOnce = false;

  private observer: IntersectionObserver | undefined;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.initObserver();
  }

  ngAfterViewInit() {
    this.startObserving();
  }

  private initObserver(): void {
    const options = {
      root: this.root,
      rootMargin: `${this.rootMargin}px`,
      threshold: this.threshold
    };

    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        this.visible.next(this.isIntersecting(entry));
        if (this.emitOnce) {
          observer.unobserve(entry.target);
        }
      });
    }, options);
  }

  private startObserving(): void {
    if (this.observer) {
      this.observer.observe(this.element.nativeElement);
    }
  }

  private isIntersecting(entry: IntersectionObserverEntry): boolean {
    return entry.isIntersecting;
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
  }
  
}

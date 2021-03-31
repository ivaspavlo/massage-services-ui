
import { DOCUMENT } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, Input, Inject } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, tap } from 'rxjs/operators';


@Component({
  selector: 'app-scroll-down',
  templateUrl: './scroll-down.component.html',
  styleUrls: ['./scroll-down.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollDownComponent implements OnInit {

  @Input() scrollTo: number = 0;
  @Input() hideOnHeight = 200;
  @Input() startValue = true;
  @Input() scrollContainer: HTMLElement;

  public isVisible$: Observable<boolean>;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() {
    this.scrollContainer = this.scrollContainer || this.document.documentElement;
    this.isVisible$ = this.toggleVisiblityOnScroll();
    this.scrollContainer.addEventListener('scroll', () => console.log('works'));
  }

  public onClick(): void {
    this.scrollContainer.scrollTo(0, this.scrollTo);
  }

  private toggleVisiblityOnScroll(): Observable<boolean> {
    
    return fromEvent(this.scrollContainer, 'scroll').pipe(
      tap(res => console.log('test')),
      debounceTime(100),
      map(_ => this.scrollContainer.scrollTop < this.hideOnHeight),
      distinctUntilChanged(),
      startWith(this.startValue)
    );
  };

}

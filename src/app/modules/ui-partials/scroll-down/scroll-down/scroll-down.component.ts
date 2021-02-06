
import { DOCUMENT } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, Input, Inject } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';


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

  public isVisible$: Observable<boolean>;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() {
    this.isVisible$ = this.toggleVisiblityOnScroll();
  }

  public onClick(): void {
    this.document.documentElement.scrollTo(0, this.scrollTo);
  }

  private toggleVisiblityOnScroll(): Observable<boolean> {
    return fromEvent(this.document, 'scroll').pipe(
      debounceTime(100),
      map(_ => this.document.documentElement.scrollTop < this.hideOnHeight),
      distinctUntilChanged(),
      startWith(this.startValue)
    );
  };

}

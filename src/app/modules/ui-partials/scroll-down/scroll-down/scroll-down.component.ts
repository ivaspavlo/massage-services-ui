
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

  @Input() scrollTo: number = null;
  @Input() hideOnHeight = 200;

  public isVisible$: Observable<boolean>;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() {
    this.isVisible$ = this.toggleVisiblityOnScroll(this.hideOnHeight);
  }

  public onClick(): void {
    this.document.documentElement.scrollTo(0, this.scrollTo || this.document.documentElement.clientHeight);
  }

  private toggleVisiblityOnScroll(
    hideOnHeight: number,
    startWithValue: boolean = true
  ): Observable<boolean> {
    return fromEvent(this.document, 'scroll').pipe(
      debounceTime(100),
      map(_ => this.document.documentElement.scrollTop < hideOnHeight),
      distinctUntilChanged(),
      startWith(startWithValue)
    );
  };

}


import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-scroll-down',
  templateUrl: './scroll-down.component.html',
  styleUrls: ['./scroll-down.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollDownComponent implements OnInit {

  @Input() scrollElement: HTMLElement;
  @Input() scrollTo: number = null;
  @Input() hideOnHeight = 200;

  public isVisible$: Observable<boolean>;

  constructor() { }

  ngOnInit() {
    this.isVisible$ = this.toggleVisiblityOnScroll(this.hideOnHeight);
  }

  public onClick(): void {
    this.scrollElement.scrollTo(0, this.scrollTo || this.scrollElement.clientHeight);
  }

  private toggleVisiblityOnScroll(
    hideOnHeight: number,
    startWithValue: boolean = true
  ): Observable<boolean> {
    return fromEvent(this.scrollElement, 'scroll').pipe(
      debounceTime(100),
      map(_ => this.scrollElement.scrollTop < hideOnHeight),
      distinctUntilChanged(),
      startWith(startWithValue)
    );
  };

}

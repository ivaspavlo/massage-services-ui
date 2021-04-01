
import { Component, OnInit, ChangeDetectionStrategy, Input, Inject, OnDestroy, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, pairwise, shareReplay, skip, takeUntil, tap } from 'rxjs/operators';
import { WINDOW } from '@app/core/providers';


@Component({
  selector: 'app-desktop-menu',
  templateUrl: './desktop-menu.component.html',
  styleUrls: ['./desktop-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DesktopMenuComponent implements OnInit, OnDestroy {

  @Input() public items: { name: string; href: string; }[];
  @Output() public showLoginModal: EventEmitter<void> = new EventEmitter();
  
  public isShrinked$: Observable<boolean>;
  private windowInnerheight: number;
  private componentDestroyed$: Subject<void> = new Subject();

  constructor(
    @Inject(WINDOW) private window: Window,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.windowInnerheight = this.window.innerHeight;
    this.isShrinked$ = this.initIsShrinkedObservable();
    this.initIsShrinkedObservable();
  }

  private initIsShrinkedObservable(): Observable<boolean> {
    return fromEvent(this.window, 'scroll').pipe(
      skip(1),
      debounceTime(50),
      map(_ => this.window.scrollY),
      pairwise(),
      distinctUntilChanged(),
      map(([prev, curr]) => curr > this.windowInnerheight && prev < curr),
      tap(_ => this.cdr.detectChanges()),
      takeUntil(this.componentDestroyed$),
      shareReplay(1)
    );
  }

  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
  }

}

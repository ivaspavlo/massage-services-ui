import { Component, OnInit, ChangeDetectionStrategy, ContentChildren, QueryList, ContentChild, Input, ElementRef, ViewChild } from '@angular/core';
import { HorizontalMenuItemDirective } from '../directives';


@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HorizontalMenuComponent implements OnInit {
  
  @ViewChild('container', { static: true }) container: ElementRef;
  @ViewChild('menu', { static: true }) menu: ElementRef;
  @ContentChildren(HorizontalMenuItemDirective, {read: ElementRef}) queryList: QueryList<ContentChild>;
  
  @Input() set (value) {
    if (value) {
      this._minWidth = value;
    }
  };
  get style() {
    return {'min-width.px': this._minWidth};
  }
  get items() {
    return Array.from(this.queryList, (i: any) => i.nativeElement);
  }
  get itemWidth() {
    return this.items && this.items.length > 0 ? this.items[0].clientWidth : 0;
  }
  get totalWidth() {
    return this.items.length * this.itemWidth;
  }
  get showButtons() {
    return this.container.nativeElement.offsetWidth < this.menu.nativeElement.offsetWidth;
  }

  private _minWidth = 992;

  constructor() { }

  ngOnInit(): void { }
  
  public onNextClick() {
    const currentScroll = this.container.nativeElement.scrollLeft;
    const scroll = currentScroll + this.itemWidth > this.totalWidth ? this.itemWidth : currentScroll + this.itemWidth;
    this.container.nativeElement.scrollLeft = scroll;
  }
  
  public onPreviousClick() {
    const currentScroll = this.container.nativeElement.scrollLeft;
    const scroll = currentScroll - this.itemWidth > 0 ? this.itemWidth : 0;
    this.container.nativeElement.scrollLeft = scroll;
  }

}

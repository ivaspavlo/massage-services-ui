
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ElementRef, AfterViewInit, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { ITab } from '../interfaces';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements OnInit, AfterViewInit {
  
  @ViewChildren('underlines') underlines: QueryList<ElementRef>;
  
  @Input() items: ITab[] = [];
  @Input() current = 0;
  
  @Output() tabClick: EventEmitter<ITab> = new EventEmitter();

  public underlineShift: object = {};

  constructor(
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void { }
  
  ngAfterViewInit(): void {
    this.moveUnderline(this.current);
  }
  
  public onTabClick(index: number): void {
    this.current = index;
    this.tabClick.emit(this.items[index]);
    this.moveUnderline(index);
  }
  
  private moveUnderline(index: number): void {
    this.underlineShift = { 'left': `${100 * index}%` };
    this.cdr.detectChanges();
  }

}

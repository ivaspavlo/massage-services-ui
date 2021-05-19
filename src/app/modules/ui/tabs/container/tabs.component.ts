
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, Renderer2, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
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
  
  @Output() tabClick: EventEmitter<string> = new EventEmitter();
  
  private underline: HTMLElement;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void { }
  
  ngAfterViewInit(): void {
    this.initMovableUnderline();
    this.moveUnderline(this.current);
  }
  
  public onTabClick(index: number): void {
    this.current = index;
    this.tabClick.emit(this.items[index]?.url);
    this.moveUnderline(index);
  }
  
  private moveUnderline(index: number): void {
    if (this.underline) {
      this.renderer.setStyle(this.underline, 'left', `${100 * index}%`);
    }
  }
  
  private initMovableUnderline(): void {
    this.underline = this.underlines?.first?.nativeElement || null;
  }

}


import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, Renderer2, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements OnInit {
  
  @ViewChild('line') line: ElementRef;
  
  @Input() items: any[] = [
    { name: 'Features' },
    { name: 'History' }
  ];
  @Input() current = 0;
  @Output() tabClick: EventEmitter<string> = new EventEmitter();

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.moveUnderline(this.current);
  }
  
  public onTabClick(index: number): void {
    this.current = index;
    this.tabClick.emit(this.items[index]);
    this.moveUnderline(index);
  }
  
  private moveUnderline(index: number): void {
    this.renderer.setStyle(this.line.nativeElement, 'left', `${100 * index}%`);
  }

}

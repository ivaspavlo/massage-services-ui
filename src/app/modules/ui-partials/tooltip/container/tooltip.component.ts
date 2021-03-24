
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent implements OnInit, AfterViewInit {
  
  @ViewChild('container', {read: ElementRef}) private container;
  
  public top: string;
  public left: string;

  constructor(
    @Inject('tooltipConfig') private config,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void { debugger; }
  
  ngAfterViewInit(): void {
    debugger;
    const { offsetTop: hostTop, offsetLeft: hostLeft } = this.config.host;
    const { width: hostWidth } = this.config.host.getBoundingClientRect();
    const { height } = this.container.nativeElement.getBoundingClientRect();
    this.top = `${hostTop - height}px`;
    this.left = `${hostLeft + hostWidth}px`;
    this.cdr.detectChanges();
  }

}

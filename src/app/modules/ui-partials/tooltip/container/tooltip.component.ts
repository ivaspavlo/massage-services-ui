
import { ChangeDetectionStrategy, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { TooltipDirective } from '../directives/tooltip.directive';


@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent implements OnInit {
  
  @ViewChild(TooltipDirective, {read: ElementRef}) private tooltipContainer;
  
  public top: string;

  constructor(@Inject('tooltipConfig') private config) { }

  ngOnInit(): void {
    const { top } = this.config.host.getBoundingClientRect();
    const { height } = this.tooltipContainer.nativeElement.getBoundingClientRect();
    this.top = `${top - height}px`;
  }

}

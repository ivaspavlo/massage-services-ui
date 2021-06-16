import { Component, OnInit, TemplateRef } from '@angular/core';

import { PopoverRendererMethod } from '../interfaces';
import { PopoverRef } from '../popover-ref';


@Component({
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {

  public renderMethod: PopoverRendererMethod = 'component';
  public content: any;
  public context: any;

  constructor(
    private popoverRef: PopoverRef
  ) { }

  ngOnInit() {
    this.content = this.popoverRef.content;
    if (typeof this.content === 'string') {
      this.renderMethod = 'text';
    }
    if (this.content instanceof TemplateRef) {
      this.renderMethod = 'template';
      this.context = {
        close: this.popoverRef.close.bind(this.popoverRef)
      };
    }
  }

}

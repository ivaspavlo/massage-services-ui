import { DOCUMENT } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { IExpansionPanelItem } from '../interfaces';


@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpansionPanelComponent implements OnInit {
  
  @ViewChild('panel', {static: true}) panel: ElementRef;

  @Input() items: IExpansionPanelItem[] = [];
  @Input() set isOpen(value: boolean) {
    this._isOpen = value;
    if (this._isOpen && this.panel) {
      this.maxHeight = this.getMaxHeight(this.document, this.panel.nativeElement);
    }
  };
  get isOpen() {
    return this._isOpen;
  }
  private _isOpen = false;
  public maxHeight: string = 'auto';

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void { }
  
  private getMaxHeight(document: Document, panelElement: HTMLElement): string {
    const documentHeight = document.body.offsetHeight;
    const { top } = panelElement.getBoundingClientRect();
    const biggerThanView = top + panelElement.clientHeight > documentHeight;
    return biggerThanView ? `${documentHeight - top}px` : 'auto';
  }

}

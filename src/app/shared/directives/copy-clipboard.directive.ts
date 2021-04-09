
import { DOCUMENT } from '@angular/common';
import { Directive, HostListener, Input, Output, EventEmitter, Inject } from '@angular/core';


@Directive({
  selector: '[copyClipboard]'
})
export class CopyClipboardDirective {
  
  @Input('copyClipboard') payload: string;

  @Output('copied') copied: EventEmitter<string> = new EventEmitter();

  @HostListener('click', ['$event']) onClick(event: MouseEvent): void {
    event.preventDefault();
    
    if (!this.payload) {
      return;
    }

    const listener = (e: ClipboardEvent) => {
      const clipboard = e.clipboardData || window['clipboardData'];
      clipboard.setData('text', this.payload.toString());
      e.preventDefault();
      this.copied.emit(this.payload);
    };

    this.document.addEventListener('copy', listener, false)
    this.document.execCommand('copy');
    this.document.removeEventListener('copy', listener, false);
  }
  
  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }
  
}

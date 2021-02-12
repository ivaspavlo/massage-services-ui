
import { Component, Input, OnInit } from '@angular/core';

interface IQuote {
  id: string;
  text: string;
  author: string;
  name: string;
  about: string;
}

interface IQuoteHexColors {
  background: string;
  border: string;
  text: string;
  author: string;
  about: string;
  controls: string;
}

@Component({
  selector: 'app-slider-quote',
  templateUrl: './slider-quote.component.html',
  styleUrls: ['./slider-quote.component.scss']
})
export class SliderQuoteComponent implements OnInit {

  @Input() quotes: IQuote[];
  @Input() colours: IQuoteHexColors;
  @Input() hideControls = true;

  constructor() { }

  ngOnInit(): void { }

}

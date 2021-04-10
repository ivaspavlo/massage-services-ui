
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MOCK_PRODUCTS, MOCK_QUOTES } from '../constants';


@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainContainerComponent implements OnInit {

  public productCards = MOCK_PRODUCTS;
  public quotes = MOCK_QUOTES;

  public isScrollBtnVisible = true;

  constructor() { }

  ngOnInit(): void { }

}

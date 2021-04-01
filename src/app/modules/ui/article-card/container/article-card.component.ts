
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';


interface IArticleCardConfig {
  title: string;
  url: string;
  main_img: string;
  author_img: string;
  text: string;
  author: string;
  date: string;
}

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleCardComponent implements OnInit {
  
  @Input() config: IArticleCardConfig;

  constructor() { }

  ngOnInit(): void { }

}

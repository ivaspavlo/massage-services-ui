
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';


interface IArticleConfig {
  title: string;
  url: string;
  main_img: string;
  author_img: string;
  text: string;
  author: string;
  date: string;
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent implements OnInit {
  
  @Input() config: IArticleConfig;

  constructor() { }

  ngOnInit(): void { }

}

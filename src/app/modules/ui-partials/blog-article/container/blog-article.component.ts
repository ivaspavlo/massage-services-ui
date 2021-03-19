
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IBlogArticle } from '../interfaces';


@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogArticleComponent implements OnInit {
  
  @Input() config: IBlogArticle;

  constructor() { }

  ngOnInit(): void { }

}

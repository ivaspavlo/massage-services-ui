
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IArticleCard } from '../interfaces';


const MockArticleCard = {
  title: 'Lorem Ipsum Dolore, sunt asperiores quaerat doloremque commodi',
  url: '/blog/1',
  main_img: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  author_img: 'https://assets.codepen.io/2642098/internal/avatars/users/default.png?format=auto&height=80&version=1543776877&width=80',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sunt asperiores quaerat doloremque commodi facere dolor. Velit pariatur, enim veniam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius adipisci nulla veritatis neque corrupti similique, sint quae earum quidem atque dicta minima ipsum molestias aperiam odio rem consectetur magnam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, nemo laboriosam. Tempora illum totam repellat placeat alias obcaecati minus animi debitis consectetur expedita corporis blanditiis quis, ex voluptatem error! Consequatur?',
  author: 'Sergiy Tkachuk',
  date: 'Mar 10, 2020',
}

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleCardComponent implements OnInit {
  
  @Input() config: IArticleCard = MockArticleCard;

  constructor() { }

  ngOnInit(): void { }

}

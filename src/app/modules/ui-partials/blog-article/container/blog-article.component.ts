
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IBlogArticle } from '../interfaces';


const MockArticle = {
  bg_title_1: 'Tkachuk',
  bg_title_2: 'Blog',
  title: 'Why you Need More Magnesium in Your Daily Diet',
  title_img: 'https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg',
  author_name: 'Sergiy Tkachuk',
  author_img: 'https://randomuser.me/api/portraits/men/95.jpg',
  day: 15,
  month: 'january',
  intro: 'Magnesium is one of the six essential macro-minerals that is required by the body for energy production and synthesis of protein and enzymes. It contributes to the development of bones and most importantly it is responsible for synthesis of your DNA and RNA. A new report that has appeared in theBritish Journal of Cancer, gives you another reason to add more magnesium to your diet...',
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rem modi atque, quae dolor perspiciatis similique totam debitis ipsum ratione cumque, ducimus a inventore? Magnam nulla numquam odit est et. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error officia quam corrupti, alias laborum voluptatem nemo provident, deserunt quis quae nobis similique voluptates ipsa doloremque? Repudiandae dolorem recusandae eveniet culpa?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta a minima recusandae tenetur dolores nulla, veniam itaque natus vel fuga possimus error similique aspernatur, impedit quis iusto eius molestias ipsa.Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ea quae recusandae nam sequi exercitationem ipsum eius magnam nostrum odio, laboriosam doloremque, adipisci harum officia reprehenderit quo, id maiores deserunt?Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus rerum corporis fuga qui perspiciatis ratione porro accusantium, autem quis, recusandae cumque voluptatibus. Quidem magnam molestias cupiditate maxime nam quos assumenda.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi ipsam animi eos, veniam consectetur fugiat id et dolores numquam quibusdam deserunt soluta, nisi reprehenderit natus, pariatur vero reiciendis! Architecto, voluptatum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit a natus quam sequi itaque ducimus doloremque corrupti? Cupiditate similique quas itaque, velit perferendis quidem ducimus accusamus aspernatur, odio nihil numquam!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error dicta repellendus itaque aliquam nihil eius quod, possimus et consequatur suscipit corrupti, harum sed nam quia! Quia expedita repellendus at fugiat.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum repudiandae quo libero omnis rerum accusamus? Vero aut doloribus repellat magni nihil sunt alias accusantium quaerat, laboriosam libero non voluptatibus magnam?',
  watched_times: 20,
  hearts: 12
}

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogArticleComponent implements OnInit {
  
  @Input() config: IBlogArticle = MockArticle;

  constructor() { }

  ngOnInit(): void { }

}

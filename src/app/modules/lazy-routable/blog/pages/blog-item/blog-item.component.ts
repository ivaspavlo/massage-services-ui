
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { IBlogArticle } from '@app/interfaces';


@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogItemComponent implements OnInit {
  
  public config$: Observable<IBlogArticle>

  constructor(
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.pipe(
      switchMap(params => {
        // TODO: refactor when api is ready
        return of(params.id)
      })
    ).subscribe(_ => undefined);
  }
  
  public onCopied(): void {
    // to be implemented
  }
  
  public onArticleLoaded(id: string): void {
    // to be implemented
  }
  
  public onLiked(id: string): void {
    // to be implemented
  }

}

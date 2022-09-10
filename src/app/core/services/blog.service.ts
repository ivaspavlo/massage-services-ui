import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBlogArticle } from '@app/interfaces';


@Injectable()
export class BlogService {
  
  constructor() { }
  
  public getAll(): Observable<IBlogArticle[]> {
    return;
  }
  
}

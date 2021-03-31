
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DialogService } from '@app/modules/ui-partials/dialog/services';
import { MOCK_ARTICLES } from '../../constants/mock-artcles';
import { BlogItemComponent } from '../blog-item/blog-item.component';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent implements OnInit {
  
  public MOCK_ARTICLES = MOCK_ARTICLES;

  constructor(public dialogService: DialogService) {
    debugger;
    this.dialogService.open(BlogItemComponent);
  }

  ngOnInit(): void { }

}

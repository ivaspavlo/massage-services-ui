
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { IProductCard } from '@app/interfaces';


@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GiftsComponent implements OnInit {
  
  public giftCards$: Observable<IProductCard[]>;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.giftCards$ = this.route.data.pipe(
      map((data: { giftCards: IProductCard[] }) => data.giftCards)
    );
  }
  
}

import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingFacade } from '../../booking.facade';
import { IProduct } from '../../interfaces';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReservationComponent implements OnInit {
  
  public products$: Observable<IProduct[]>;
  
  constructor(
    private facade: BookingFacade
  ) { }

  ngOnInit(): void {
    this.products$ = this.facade.getMassageList();
  }

}

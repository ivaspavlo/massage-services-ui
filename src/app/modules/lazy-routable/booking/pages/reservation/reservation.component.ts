import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { DialogService } from '@app/modules/ui/dialog';
import { Observable } from 'rxjs';
import { BookingFacade } from '../../booking.facade';
import { IProduct } from '../../interfaces';
import { BookDateModalComponent } from '../../modals/book-date-modal/book-date-modal.component';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReservationComponent implements OnInit {
  
  public products$: Observable<IProduct[]>;
  
  constructor(
    private facade: BookingFacade,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.products$ = this.facade.getMassageList();
  }

  public onBook(product: IProduct): void {
    this.dialogService.open(BookDateModalComponent, product);
  }

}

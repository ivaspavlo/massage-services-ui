import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { DialogService } from '@app/modules/ui/dialog';
import { ToastService } from '@app/modules/ui/toast';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BookingFacade } from '../../booking.facade';
import { IBookingTime, IProduct } from '../../interfaces';
import { SelectDateModalComponent } from '../../modals/select-date-modal/select-date-modal.component';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReservationComponent implements OnInit, OnDestroy {
  
  public products$: Observable<IProduct[]>;
  private componentDestroyed$: Subject<void> = new Subject();
  
  constructor(
    private facade: BookingFacade,
    private dialogService: DialogService,
    private toastService: ToastService,
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
    this.products$ = this.facade.getMassageList();
  }

  public onBook(product: IProduct): void {
    const dialogConfig = {
      product,
      bookingData$: this.facade.getAvailableDates()
    };
    this.dialogService.open(SelectDateModalComponent, dialogConfig).afterClosed.pipe(
      takeUntil(this.componentDestroyed$)
    ).subscribe((req: IBookingTime[]) => {
      if (req) {
        this.facade.confirmBooking(req);
        this.toastService.show({
          text: this.translateService.instant('toast.added-to-cart'),
          type: 'success'
        });
      }
    });
  }

  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
  }

}

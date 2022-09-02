import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogConfig, DialogRef } from '@app/modules/ui/dialog';
import { IProduct } from '../../interfaces';


@Component({
  selector: 'app-select-date-modal',
  templateUrl: './select-date-modal.component.html',
  styleUrls: ['./select-date-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectDateModalComponent implements OnInit {

  public product: IProduct;

  constructor(
    public config: DialogConfig,
    public dialog: DialogRef
  ) { }

  ngOnInit(): void {
    this.product = this.config.data;
  }

}

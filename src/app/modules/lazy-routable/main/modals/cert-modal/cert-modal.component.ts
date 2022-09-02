import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogConfig, DialogRef } from '@app/modules/ui/dialog';
import { ICertificate } from '../../interfaces';


@Component({
  selector: 'app-cert-modal',
  templateUrl: './cert-modal.component.html',
  styleUrls: ['./cert-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CertModalComponent implements OnInit {
  
  public cert: ICertificate;

  constructor(
    public config: DialogConfig,
    public dialog: DialogRef
  ) { }

  ngOnInit(): void {
    this.cert = this.config.data;
  }

}

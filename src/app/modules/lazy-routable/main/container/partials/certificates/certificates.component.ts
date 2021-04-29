
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ISlide } from '@app/interfaces';
import { ICertificate } from '../../../interfaces';


@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CertificatesComponent implements OnInit {

  @Input() certificates: ICertificate[];
  @Input() slides: ISlide[];

  constructor() { }

  ngOnInit(): void { }

}

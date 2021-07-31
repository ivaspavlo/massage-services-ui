
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
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
  
  @Output() certClick: EventEmitter<ICertificate> = new EventEmitter();
  @Output() showInfo: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

}

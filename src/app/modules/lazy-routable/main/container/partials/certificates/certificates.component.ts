
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';


@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CertificatesComponent implements OnInit {

  @Input() certificates: any[] = [
    { src: '/assets/img/png/cert-1.jpg' },
    { src: '/assets/img/png/cert-2.jpg' },
    { src: '/assets/img/png/cert-1.jpg' },
    { src: '/assets/img/png/cert-2.jpg' },
    { src: '/assets/img/png/cert-1.jpg' }
  ];
  public isVisible = false;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void { }

}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cert-modal',
  templateUrl: './cert-modal.component.html',
  styleUrls: ['./cert-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CertModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

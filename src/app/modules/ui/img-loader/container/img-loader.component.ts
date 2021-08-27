import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-img-loader',
  templateUrl: './img-loader.component.html',
  styleUrls: ['./img-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImgLoaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

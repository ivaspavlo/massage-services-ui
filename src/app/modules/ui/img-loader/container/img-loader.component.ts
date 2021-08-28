import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ImgLoaderAdapter } from '../img-loader.adapter';


@Component({
  selector: 'app-img-loader',
  templateUrl: './img-loader.component.html',
  styleUrls: ['./img-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImgLoaderComponent implements OnInit {

  public adapter = new ImgLoaderAdapter(this.http);

  constructor(
    private http: HttpClient
  ) {}

  public ngOnInit(): void {}

  public uploadSuccess(event): void {
    console.log(event);
  }

}

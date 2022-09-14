import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IInfo } from '../interfaces';


@Injectable()
export class InfoService {
  
  constructor() { }

  public getAbout(): Observable<IInfo[]> {
    return of([
      {
        img: '/assets/img/png/about-bg.png',
        imgAlt: 'About page item',
        title: 'info.about.block.title',
        text: 'info.about.block.content'
      }
    ]);
  }

  public getDiscounts(): Observable<IInfo[]> {
    return of([
      {
        img: '/assets/img/png/about-bg.png',
        imgAlt: 'Discounts page item',
        title: 'info.discounts.block.title',
        text: 'info.discounts.block.content'
      }, {
        img: '/assets/img/png/about-bg.png',
        imgAlt: 'About page item',
        title: 'info.about.block.title',
        text: 'info.about.block.content'
      }, {
        img: '/assets/img/png/about-bg.png',
        imgAlt: 'About page item',
        title: 'info.about.block.title',
        text: 'info.about.block.content'
      }
    ]);
  }

  public getServices(): Observable<IInfo[]> {
    return of([
      {
        img: '/assets/img/png/about-bg.png',
        imgAlt: 'About page item',
        title: 'info.about.block.title',
        text: 'info.about.block.content'
      }, {
        img: '/assets/img/png/about-bg.png',
        imgAlt: 'About page item',
        title: 'info.about.block.title',
        text: 'info.about.block.content'
      }, {
        img: '/assets/img/png/about-bg.png',
        imgAlt: 'About page item',
        title: 'info.about.block.title',
        text: 'info.about.block.content'
      }
    ]);
  }
  
}

import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-brand-services',
  templateUrl: './brand-services.component.html',
  styleUrls: ['./brand-services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandServicesComponent implements OnInit {

  @Input() scrollElement: HTMLElement;
  public isVisible: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {

    let didScroll = false;
    let paralaxTitles = this.document.querySelectorAll('.paralax-title');

    const scrollInProgress = () => {
      didScroll = true;
    }

    const raf = () => {
      console.log('works!');
      if (didScroll) {
        paralaxTitles.forEach((element: any, index) => {
          element.style.transform = "translateX(" + window.scrollY / 10 + "%)"
        })
        didScroll = false;
      }
      requestAnimationFrame(raf);
    }


    requestAnimationFrame(raf);
    this.scrollElement.addEventListener('scroll', scrollInProgress);

  }

}

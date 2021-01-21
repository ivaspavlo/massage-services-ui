
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input, OnInit, Renderer2, ViewChild } from '@angular/core';


@Component({
  selector: 'app-brand-services',
  templateUrl: './brand-services.component.html',
  styleUrls: ['./brand-services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandServicesComponent implements OnInit {

  @ViewChild('title1') title1: ElementRef;
  @ViewChild('title2') title2: ElementRef;
  @ViewChild('test') test: ElementRef;

  @Input() scrollElement: HTMLElement;
  public isVisible: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {

    let didScroll = false;
    let paralaxTitles = this.document.querySelectorAll('.paralax-title');

    const scrollInProgress = () => {
      didScroll = true;
    }

    const raf = () => {
      if (didScroll) {
        
        didScroll = false;
      }
      requestAnimationFrame(raf);
    }

    let shift = 10;

    // requestAnimationFrame(raf);
    this.scrollElement.addEventListener('scroll', () => {
      if (this.isVisible) {
        shift = shift + 1;
        debugger;
        this.renderer.setStyle(this.title1.nativeElement, 'transform', `translateX(${ shift }%)`);
        this.renderer.setStyle(this.title2.nativeElement, 'transform', `translateX(${ shift }%)`);
        // this.title1.nativeElement.style.transform = "translateX(" + window.scrollY / 10 + "%)";
        // this.title2.nativeElement.style.transform = "translateX(" + window.scrollY / 10 + "%)";
      }
    });

  }

}

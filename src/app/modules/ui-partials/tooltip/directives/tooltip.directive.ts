
import { ComponentFactoryResolver, ComponentRef, Directive, ElementRef, HostListener, Injector, Input, Renderer2, TemplateRef, Type, ViewContainerRef } from '@angular/core';
import { TooltipComponent } from '../container/tooltip.component';
import { ContentTypes, Positions } from '../constants';


@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  @Input('appTooltip') content: string | TemplateRef<any> | Type<any>;
  @Input('tooltipPosition') position: keyof Positions;
  
  @HostListener('mouseenter')
  mouseenter() {
    if (this.componentRef) {
      return;
    };
    const factory = this.resolver.resolveComponentFactory(TooltipComponent);
    const contentType = this.getContentType();
    const content = this.generateNgContent(this.content, contentType);
    const injector = Injector.create({
      providers: [
        {
          provide: 'tooltipConfig',
          useValue: { contentType, host: this.element.nativeElement, position: this.position }
        }
      ]
    });
    this.componentRef = this.vcr.createComponent(factory, 0, injector, content);
  }
  @HostListener('mouseout')
  mouseout() {
    this.destroy();
  }
  
  private componentRef: ComponentRef<TooltipComponent>;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private injector: Injector,
    private resolver: ComponentFactoryResolver,
    private vcr: ViewContainerRef
  ) { }

  private generateNgContent(content, contentType: string): any[][] | undefined {
    switch (contentType) {
      case ContentTypes.string: {
        const element = this.renderer.createText(content);
        return [ [element] ];
      };
      case ContentTypes.template: {
        const context = {};
        const viewRef = content.createEmbeddedView(context);
        return [ viewRef.rootNodes ];
      };
      case ContentTypes.component: {
        const factory = this.resolver.resolveComponentFactory(content);
        const componentRef = factory.create(this.injector);
        return [ [ componentRef.location.nativeElement ] ];
      };
      case ContentTypes.other: {
        return undefined;
      }
    }
  }
  
  private getContentType(): string {
    if (typeof this.content === 'string') {
      return ContentTypes.string;
    } else if (this.content instanceof TemplateRef) {
      return ContentTypes.template;
    } else {
      try {
        this.resolver.resolveComponentFactory(this.content);
        return ContentTypes.component;
      } catch(error) {
        return ContentTypes.other;
      }
    }
  }
  
  private destroy(): void {
    this.componentRef && this.componentRef.destroy();
    this.componentRef = null;
  }

  ngOnDestroy() {
    this.destroy();
  }

}

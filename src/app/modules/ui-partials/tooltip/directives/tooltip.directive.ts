
import { ComponentFactoryResolver, ComponentRef, Directive, ElementRef, HostListener, Injector, Input, Renderer2, TemplateRef, Type, ViewContainerRef } from '@angular/core';
import { TooltipComponent } from '../container/tooltip.component';


@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  @Input('appTooltip') content: string | TemplateRef<any> | Type<any>;
  
  @HostListener('mouseenter')
  mouseenter() {
    debugger;
    if (this.componentRef) {
      return;
    };
    const factory = this.resolver.resolveComponentFactory(TooltipComponent);
    const injector = Injector.create({
      providers: [{provide: 'tooltipConfig', useValue: { host: this.element.nativeElement }}]
    });
    this.componentRef = this.vcr.createComponent(factory, 0, injector, this.generateNgContent());
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
  ) { debugger; }

  generateNgContent() {
    if (typeof this.content === 'string') {
      const element = this.renderer.createText(this.content);
      return [ [ element ] ];
    } else if (this.content instanceof TemplateRef) {
      const context = {};
      const viewRef = this.content.createEmbeddedView(context);
      return [ viewRef.rootNodes ];
    } else {
      const factory = this.resolver.resolveComponentFactory(this.content);
      const componentRef = factory.create(this.injector);
      return [ [ componentRef.location.nativeElement ] ];
    }
  }
  
  destroy() {
    this.componentRef && this.componentRef.destroy();
    this.componentRef = null;
  }

  ngOnDestroy() {
    this.destroy();
  }

}

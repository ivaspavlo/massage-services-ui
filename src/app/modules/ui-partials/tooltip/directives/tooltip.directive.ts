
import { ComponentFactoryResolver, ComponentRef, Directive, ElementRef, HostListener, Injector, Input, ReflectiveInjector, Renderer2, TemplateRef, Type, ViewContainerRef } from '@angular/core';
import { TooltipComponent } from '../container/tooltip.component';


@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  @Input('appTooltip') content: string | TemplateRef<any> | Type<any>;
  
  @HostListener('mouseenter')
  mouseenter() {
    if ( this.componentRef ) return;
    const factory = this.resolver.resolveComponentFactory(TooltipComponent);
    const injector = ReflectiveInjector.resolveAndCreate([
      {
        provide: 'tooltipConfig',
        useValue: {
          host: this.element.nativeElement
        }
      }
    ]);
    this.componentRef = this.vcr.createComponent(factory, 0, injector, this.generateNgContent());
  }
  
  private componentRef : ComponentRef<TooltipComponent>;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private injector: Injector,
    private resolver: ComponentFactoryResolver,
    private vcr: ViewContainerRef
  ) { }
  
  generateNgContent() {
    if ( typeof this.content === 'string' ) {
      const element = this.renderer.createText(this.content);
      return [ [ element ] ];
    }
  }

}


import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Inject, Injectable, Injector, Type } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { DialogComponent } from '../container/dialog.component';
import { DialogModule } from '../dialog.module';


@Injectable({
  providedIn: DialogModule
})
export class DialogService {
  
  private dialogComponentRef: ComponentRef<DialogComponent>

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) { }
  
  public appendDialogComponentToBody(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DialogComponent);
    const componentRef = componentFactory.create(this.injector);
    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    this.document.body.appendChild(domElem);
    
    this.dialogComponentRef = componentRef;
  }
  
  public open(componentType: Type<any>): void {
    debugger;
    this.appendDialogComponentToBody();
    this.dialogComponentRef.instance.childComponentType = componentType;
  }
  
  private removeDialogComponentFromBody(): void {
    this.appRef.detachView(this.dialogComponentRef.hostView);
    this.dialogComponentRef.destroy();
  }
  
}

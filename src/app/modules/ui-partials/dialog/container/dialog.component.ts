
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, ComponentRef, OnDestroy, OnInit, Type, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { InsertionDirective } from '../directives/insertion.directive';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent implements OnInit, AfterViewInit, OnDestroy {
  
  @ViewChild(InsertionDirective) insertionPoint: InsertionDirective;
  public childComponentType: Type<any>;
  public componentRef: ComponentRef<any>
  private readonly _onClose = new Subject<any>();

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private cdr: ChangeDetectorRef
  ) { }
  
  ngOnInit(): void { }

  ngAfterViewInit() {
    this.loadChildComponent(this.childComponentType);
    this.cdr.detectChanges();
  }

  public onOverlayClicked(evt: MouseEvent): void {
    // close the dialog
  }

  public onDialogClicked(evt: MouseEvent): void {
    evt.stopPropagation();
  }
  
  private loadChildComponent(componentType: Type<any>): void {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    let viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }
  
  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

}

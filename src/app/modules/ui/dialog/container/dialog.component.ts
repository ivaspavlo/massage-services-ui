
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { DialogConfig } from '../dialog-config';
import { InsertionDirective } from '../directives/insertion.directive';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent implements OnInit, AfterViewInit, OnDestroy {
  
  @ViewChild(InsertionDirective, {read: ViewContainerRef}) insertionPoint: ViewContainerRef;
  public componentRef: ComponentRef<any>
  private readonly _onClose = new Subject<any>();

  constructor(
    private dialogConfig: DialogConfig,
    private cdr: ChangeDetectorRef
  ) { }
  
  ngOnInit(): void { }

  ngAfterViewInit() {
    this.loadChildComponent(this.dialogConfig.contentFactory);
    this.cdr.detectChanges();
  }

  public onOverlayClicked(event: MouseEvent): void {
    // close the dialog
  }

  public onDialogClicked(event: MouseEvent): void {
    event.stopPropagation();
  }
  
  private loadChildComponent(factory): void {
    this.insertionPoint.clear();
    this.componentRef = this.insertionPoint.createComponent(factory);
  }
  
  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

}

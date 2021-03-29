
import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor() { }
  
  ngOnInit(): void { }

  ngAfterViewInit(): void { }

  public onOverlayClicked(evt: MouseEvent): void {
    // close the dialog
  }

  public onDialogClicked(evt: MouseEvent): void {
    evt.stopPropagation()
  }
  
  ngOnDestroy() { }

}

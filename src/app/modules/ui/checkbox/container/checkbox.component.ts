import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CheckboxComponent,
    multi: true
  }]
})
export class CheckboxComponent implements OnInit {

  @Input() hasErrors = false;
  
  // ControlValueAccessor
  private onChange;
  private onTouched;
  
  public innerControl = new FormControl();
  
  private componentDestroyed$: Subject<void> = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.listenToInnerControlChanges();
  }
  
  // ControlValueAccessor
  public registerOnChange(fn): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn): void {
    this.onTouched = fn;
  }
  public writeValue(value: boolean): void {
    this.innerControl.patchValue(value);
  }
  
  public onFocus(): void {
    this.onTouched();
  }

  public onInput(value: boolean): void {
    if (this.onChange) {
      this.onChange(value);
    }
  }
  
  public listenToInnerControlChanges(): void {
    this.innerControl.valueChanges.pipe(
      takeUntil(this.componentDestroyed$)
    ).subscribe((value) => {
      this.onInput(value);
    });
  }
  
  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
  }

}

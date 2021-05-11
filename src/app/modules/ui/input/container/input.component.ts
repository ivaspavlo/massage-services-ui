
import { Component, OnInit, Input, Optional } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputColorSchemes, InputTypes } from '../interfaces';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: InputComponent,
    multi: true
  }]
})
export class InputComponent implements OnInit, ControlValueAccessor {

  @Input() controlName = '';
  @Input() label = '';
  @Input() placeholder = '';
  @Input() patternFn: (value: string) => string = null;
  @Input() errorsMap: { [key:string]: string; };
  @Input() set type(value: InputTypes) {
    this._type = value || 'text';
  };
  @Input() set color(value: InputColorSchemes) {
    this._color = value || 'primary';
  }
  
  get type() { return this._type; }
  get isTextArea() { return this._type === 'textarea'; }
  get isPhone() { return this._type === 'phone'; }
  get color() { return this._color; }
  
  // public value: unknown;
  public innerControl = new FormControl();
  public hasFocus = false;

  // ControlContainer
  public get form(): FormGroup { return this.controlContainer.control as FormGroup; }
  public get control(): FormControl { return this.form.get(this.controlName) as FormControl; }

  // ControlValueAccessor
  private onChange;
  private onTouched;

  private _type: InputTypes;
  private _color: InputColorSchemes;
  private componentDestroyed$: Subject<void> = new Subject();

  constructor(
    @Optional() private controlContainer: ControlContainer
  ) { }

  ngOnInit(): void {
    this.innerControl.valueChanges.pipe(
      takeUntil(this.componentDestroyed$)
    ).subscribe(this.onInput.bind(this));
  }

  public registerOnChange(fn): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn): void {
    this.onTouched = fn;
  }
  public writeValue(value: unknown): void {
    if (this.onChange) {
      this.innerControl.patchValue(value);
    }
  }

  public onFocus(): void {
    this.onTouched();
    this.hasFocus = true;
  }

  public onBlur(): void {
    this.hasFocus = false;
  }

  public onInput(value): void {
    let formattedValue = value;
    if (this.isPhone) {
      formattedValue = this.formatPhoneNumber(value);
      const maskedValue = this.maskPhoneNumber(formattedValue);
      this.innerControl.patchValue(maskedValue, { emitEvent: false });
    }
    this.onChange(formattedValue);
  }
  
  private formatPhoneNumber(value: string): string {
    return value.replace(/\D/g, '').slice(0, 10);
  }
  
  private maskPhoneNumber(value: string): string {
    if (this.patternFn) {
      return this.patternFn(value);
    }
    if (value.length == 0) {
      return '';
    } else if (value.length <= 3) {
      return value.replace(/^(\d{0,3})/, '($1');
    } else if (value.length <= 6) {
      return value.replace(/^(\d{0,3})(\d{0,3})/, '($1) $2');
    } else {
      return value.replace(/^(\d{0,3})(\d{0,3})(.*)/, '($1) $2-$3');
    }
  }
  
  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
  }

}

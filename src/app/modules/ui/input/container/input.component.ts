
import { Component, OnInit, Input, Optional } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IMaskInput, InputColorSchemes, InputTypes } from '../interfaces';


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
  @Input() errorsMap: { [key:string]: string; };
  @Input() maxCharQty: number = null;
  @Input() maskNumber: IMaskInput = null;
  @Input() set type(value: InputTypes) {
    this._type = value || 'text';
  };
  @Input() set color(value: InputColorSchemes) {
    this._color = value || 'primary';
  }
  
  get type() { return this._type; }
  get isTextArea() { return this._type === 'textarea'; }
  get isPhone() { return this._type === 'phone'; }
  get isDate() { return this._type === 'date'; }
  get color() { return this._color; }
  
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
    this.listenToInnerControlChanges();
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
  
  public listenToInnerControlChanges(): void {
    this.innerControl.valueChanges.pipe(
      takeUntil(this.componentDestroyed$)
    ).subscribe((value) => {
      this.onInput(value);
    });
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
    if (this.maxCharQty) {
      formattedValue = this.trimValue(formattedValue, this.maxCharQty);
    }
    if (this.maskNumber) {
      formattedValue = this.maskFn(formattedValue, this.maskNumber);
    }
    this.innerControl.patchValue(formattedValue, { emitEvent: false, onlySelf: true });
    this.onChange(formattedValue);
  }
  
  public onPasswordToggle(isHidden: boolean): void {
    this._type = isHidden ? 'password' : 'text';
  }
  
  private forceNumberValue(value: string): string {
    return value.replace(/\D/g, '');
  }
  
  private trimValue(value: string, sliceBy: number): string {
    return value.slice(0, sliceBy);
  }
  
  private maskFn(value: string, { blocks, separator }: IMaskInput): string {
    const stringValue = this.forceNumberValue(value);
    let result = '';
    for (let index = 0; index < blocks.length; index++) {

      const blockSize = blocks[index];
      
      const isFirstBlock = index === 0;
      const isLastBlock = index === blocks.length - 1;
      
      const separatorsLength = separator.length * index;
      const resultLength = result.length - separatorsLength;
      
      const start = isFirstBlock ? 0 : resultLength;
      const end = isFirstBlock ? blockSize : resultLength + blockSize;
      
      const stopLoop = stringValue.length <= resultLength + blockSize;
      
      for (let n = start; n < end; n++) {
        result = stringValue[n] === undefined ? result : result + stringValue[n];
      }
      
      if (stopLoop) {
        break;
      }
      result = isLastBlock ? result : result + separator;
    }
    return result;
  }
  
  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
  }

}

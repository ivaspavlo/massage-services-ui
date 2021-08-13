
import { Component, OnInit, Input, Optional } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IMaskNumberInput, InputTypes } from '../interfaces';


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
  @Input() maskNumber: IMaskNumberInput = null;
  @Input() type: InputTypes;
  
  get isText() { return this.type === 'text'; }
  get isTextArea() { return this.type === 'textarea'; }
  get isDate() { return this.type === 'date'; }
  
  public innerControl = new FormControl();
  public innerInputType: InputTypes;
  public hasFocus = false;

  // ControlContainer
  public get form(): FormGroup { return this.controlContainer.control as FormGroup; }
  public get control(): FormControl { return this.form.get(this.controlName) as FormControl; }

  // ControlValueAccessor
  private onChange;
  private onTouched;

  private componentDestroyed$: Subject<void> = new Subject();

  constructor(
    @Optional() private controlContainer: ControlContainer
  ) { }

  ngOnInit(): void {
    this.initInnerInputType();
    this.listenToInnerControlChanges();
  }
  
  // ControlValueAccessor
  public registerOnChange(fn): void {
    this.onChange = fn;
  }
  public registerOnTouched(fn): void {
    this.onTouched = fn;
  }
  public writeValue(value: unknown): void {
    debugger;
    this.innerControl.patchValue(value);
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
    if (this.maskNumber) {
      formattedValue = this.maskFn(formattedValue, this.maskNumber);
    }
    this.innerControl.patchValue(formattedValue, { emitEvent: false, onlySelf: true });
    this?.onChange(formattedValue);
  }
  
  public onPasswordToggle(isHidden: boolean): void {
    this.innerInputType = isHidden ? 'password' : 'text';
  }
  
  private forceNumberValue(value: string): string {
    return value.replace(/\D/g, '');
  }
  
  private maskFn(value: string, { blocks, separator }: IMaskNumberInput): string {
    let valueString = this.forceNumberValue(value);
    let maxLength = 0;
    let result = '';
    for (let index = 0; index < blocks.length; index++) {
      const blockSize = blocks[index];
      maxLength += blockSize;
      
      const isFirstBlock = index === 0;
      const isLastBlock = index === blocks.length - 1;
      
      const separatorsLength = separator.length * index;
      const resultLength = result.length - separatorsLength;
      
      const start = isFirstBlock ? 0 : resultLength;
      const end = isFirstBlock ? blockSize : resultLength + blockSize;
      
      const stopLoop = valueString.length <= resultLength + blockSize;
      
      for (let n = start; n < end; n++) {
        result = valueString[n] === undefined ? result : result + valueString[n];
      }
      
      if (stopLoop) {
        break;
      }
      
      result = isLastBlock ? result : result + separator;
    }
    return result;
  }
  
  private initInnerInputType(): void {
    this.innerInputType = this.maskNumber || this.isDate || !this.type ? 'text' : this.type;
  }
  
  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.unsubscribe();
  }

}

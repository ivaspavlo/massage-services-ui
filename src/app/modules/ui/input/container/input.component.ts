
import { Component, OnInit, Input, Optional } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';


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

  @Input() controlName: string = 'name';
  @Input() errorsMap: { [key:string]: string; }
  @Input() label: string;
  @Input() placeholder: string;
  @Input() set type(value: 'text' | 'number' | 'textarea') {
    this._type = value;
    this.isTextArea = value === 'textarea';
  };
  get type() { return this._type; }
  @Input() set color(value: 'primary' | 'secondary') {
    this._color = value;
  }
  get color() {
    return this._color;
  }
  
  public isTextArea: boolean;
  public value: unknown;
  public hasFocus = false;

  // ControlContainer
  public get form(): FormGroup { return this.controlContainer.control as FormGroup; }
  public get control(): FormControl { return this.form.get(this.controlName) as FormControl; }

  // ControlValueAccessor
  private onChange;
  private onTouched;

  private _type: 'text' | 'number' | 'textarea' = 'text';
  private _color: 'primary' | 'secondary' = 'primary'

  constructor(@Optional() private controlContainer: ControlContainer) { }

  ngOnInit(): void { }

  public writeValue(value: unknown): void { this.value = value; }
  public registerOnChange(fn): void { this.onChange = fn; }
  public registerOnTouched(fn): void { this.onTouched = fn; }

  public onFocus(): void {
    this.onTouched();
    this.hasFocus = true;
  }

  public onBlur(): void {
    this.hasFocus = false;
  }

  public onInput(value: unknown): void {
    this.onChange(value);
  }

}


import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


interface IInputConfig {
  label?: string;
  placeholder?: string;
  inputType?: string;
  id?: string;
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: InputComponent,
    multi: true
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements OnInit, ControlValueAccessor {

  @Input() set config(value: IInputConfig) {
    this.label = value?.label || '';
    this.placeholder = value?.placeholder || '';
    this.inputType = value?.inputType || 'text';
    this.inputId = value?.id || this.getRandomId();
  };
  public label: string;
  public placeholder: string;
  public inputType: string;
  public inputId: string;
  public value: unknown;

  private onChange;
  private onTouched;

  constructor() { }

  ngOnInit(): void { }

  public writeValue(value: unknown): void { this.value = value; }
  public registerOnChange(fn): void { this.onChange = fn; }
  public registerOnTouched(fn): void { this.onChange = fn; }

  /**
   * Return string with randomly generated number
   * @returns {string}
   */
  private getRandomId(): string {
    return `input_id_${Math.floor(Math.random() * 6) + 1}`;
  }

}

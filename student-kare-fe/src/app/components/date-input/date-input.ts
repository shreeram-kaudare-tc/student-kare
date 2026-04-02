import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './date-input.html',
  styleUrl: './date-input.css',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DateInput), multi: true },
  ],
})
export class DateInput implements ControlValueAccessor {
  @Input() label: string = 'Birth of date';

  value: string = '';

  private onChange = (_: any) => {};
  private onTouched = () => {};

  onInput(val: string) {
    this.value = val;
    this.onChange(val);
  }

  onBlur() { this.onTouched(); }
  writeValue(val: string): void { this.value = val || ''; }
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }
}

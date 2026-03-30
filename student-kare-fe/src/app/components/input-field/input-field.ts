import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  imports: [CommonModule, FormsModule],
  templateUrl: './input-field.html',
  styleUrl: './input-field.css',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => InputField), multi: true },
  ],
})
export class InputField implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: 'text' | 'password' | 'email' | 'number' | 'tel' = 'text';
  @Input() icon: string = '';
  @Input() error: string = '';
  @Input() disabled: boolean = false;

  value: string = '';
  showPassword: boolean = false;

  private onChange = (_: any) => {};
  private onTouched = () => {};

  get inputType(): string {
    if (this.type === 'password') return this.showPassword ? 'text' : 'password';
    return this.type;
  }

  onInput(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.onChange(this.value);
  }

  onBlur() { this.onTouched(); }
  togglePassword() { this.showPassword = !this.showPassword; }
  writeValue(val: string): void { this.value = val || ''; }
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }
}

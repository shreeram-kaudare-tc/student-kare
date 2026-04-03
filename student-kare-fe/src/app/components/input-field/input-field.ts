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
  @Input() type: 'text' | 'password' | 'number' | 'tel' | 'email' = 'text';
  @Input() icon: string = '';
  @Input() error: string = '';
  @Input() disabled: boolean = false;
  @Input() isOtp: boolean = false;

  value: string = '';
  displayValue: string = '';
  showPassword: boolean = false;

  private onChange = (_: any) => { };
  private onTouched = () => { };

  get inputType(): string {
    if (this.isOtp) return 'text';
    if (this.type === 'password') return this.showPassword ? 'text' : 'password';
    return this.type;
  }

  onInput(event: Event) {
    const el = event.target as HTMLInputElement;
    const rawValue = el.value;

    if (this.isOtp && !this.showPassword) {
      // Manual masking for OTP to show asterisks (*)
      // We check if something was added or deleted
      if (rawValue.length > this.value.length) {
        // Appending character
        const addedChar = rawValue.slice(-1);
        this.value += addedChar;
      } else if (rawValue.length < this.value.length) {
        // Deleting characters
        this.value = this.value.substring(0, rawValue.length);
      }

      this.displayValue = '*'.repeat(this.value.length);
      el.value = this.displayValue;
    } else {
      this.value = rawValue;
      this.displayValue = rawValue;
    }

    this.onChange(this.value);
  }

  onBlur() {
    this.onTouched();
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
    if (this.isOtp) {
      this.displayValue = this.showPassword ? this.value : '*'.repeat(this.value.length);
    }
  }

  writeValue(val: string): void {
    this.value = val || '';
    if (this.isOtp && !this.showPassword) {
      this.displayValue = '*'.repeat(this.value.length);
    } else {
      this.displayValue = this.value;
    }
  }

  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }
}

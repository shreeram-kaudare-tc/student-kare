import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  imports: [CommonModule, FormsModule],
  templateUrl: './input-field.html',
  styleUrl: './input-field.css',
  host: { style: 'display: block;' },
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
    // If it's a password-like field, we always use 'text' or 'tel' (for numeric) 
    // to control the masking manually with '*'
    if (this.type === 'password' || this.isOtp) {
      return 'text'; 
    }
    return this.type;
  }

  onInput(event: Event) {
    const el = event.target as HTMLInputElement;
    let rawValue = el.value;

    // Handle isOtp: allow numbers only if that was the intent, but for now we follow the user's generic 'text or number'
    if (this.isOtp) {
       // Optional: Filter non-numeric if it's meant specifically for numbers only
       // But let's keep it flexible as requested.
    }

    if ((this.isOtp || this.type === 'password') && !this.showPassword) {
      // Manual masking logic: 
      // User types while masked (e.g., el.value becomes '****6').
      // We detect the new char(s) and update this.value.
      if (rawValue.length > this.value.length) {
        const added = rawValue.length - this.value.length;
        // In most mobile keyboards, we only add at the end or replace selections.
        // We look for where the non-asterisk chars are.
        const firstAdded = rawValue.split('').findIndex((c, i) => c !== '*' && i < rawValue.length);
        if (firstAdded !== -1) {
           // This is complex to get right without cursor tracking.
           // A simpler approach for the user's specific request:
           const newChars = rawValue.replace(/\*/g, '');
           this.value += newChars;
        }
      } else {
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
    this.updateDisplay();
  }

  private updateDisplay() {
    if ((this.isOtp || this.type === 'password') && !this.showPassword) {
      this.displayValue = '*'.repeat(this.value.length);
    } else {
      this.displayValue = this.value;
    }
  }

  writeValue(val: string): void {
    this.value = val || '';
    this.updateDisplay();
  }

  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }
}

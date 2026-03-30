import { Component, Input, Output, EventEmitter, ElementRef, ViewChildren, QueryList, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-otp-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './otp-input.html',
  styleUrl: './otp-input.css',
})
export class OtpInput implements OnInit {
  @Input() length: number = 4;
  @Output() otpComplete = new EventEmitter<string>();
  @ViewChildren('otpBox') otpBoxes!: QueryList<ElementRef<HTMLInputElement>>;
  digits: string[] = [];
  ngOnInit() { this.digits = Array(this.length).fill(''); }
  onInput(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    const val = input.value.replace(/D/g, '').slice(-1);
    this.digits[index] = val;
    if (val && index < this.length - 1) this.focusBox(index + 1);
    if (this.digits.every(d => d !== '')) this.otpComplete.emit(this.digits.join(''));
  }
  onKeydown(event: KeyboardEvent, index: number) {
    if (event.key === 'Backspace' && !this.digits[index] && index > 0) {
      this.digits[index - 1] = '';
      this.focusBox(index - 1);
    }
  }
  focusBox(index: number) {
    const boxes = this.otpBoxes.toArray();
    if (boxes[index]) boxes[index].nativeElement.focus();
  }
  trackByIndex(index: number): number { return index; }
}
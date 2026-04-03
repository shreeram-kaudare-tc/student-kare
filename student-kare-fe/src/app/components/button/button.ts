import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
  host: { style: 'display: block;' },
})
export class Button {
  @Input() label: string = '';
  @Input() variant: 'primary' | 'secondary' | 'outline' | 'ghost' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() fullWidth: boolean = false;
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() type: 'button' | 'submit' = 'button';

  get classes(): string {
    const base = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none active:scale-95 whitespace-nowrap';

    const sizes: Record<string, string> = {
      sm: 'px-4 h-10 text-sm',
      md: 'px-[20px] h-[48px] text-[14px] font-medium leading-[48px]',
      lg: 'px-[25px] h-[48px] text-[16px] font-semibold leading-[48px]',
    };

    const variants: Record<string, string> = {
      primary: 'btn-primary-gradient text-white',
      secondary: 'bg-[#22C55E] text-white hover:bg-green-600',
      outline: 'bg-white text-[#3E63DD] border border-[#3E63DD] hover:bg-blue-50',
      ghost: 'text-[#3E63DD] hover:bg-blue-50',
    };

    const width = 'w-full';
    const dis = this.disabled || this.loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

    return [base, sizes[this.size], variants[this.variant], width, dis].join(' ');
  }
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
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
    const base = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none active:scale-95';

    const sizes: Record<string, string> = {
      sm: 'px-4 h-10 text-sm',
      md: 'px-6 h-[50px] text-sm',
      lg: 'px-8 h-14 text-base',
    };

    const variants: Record<string, string> = {
      primary: 'btn-primary-gradient text-white',
      secondary: 'bg-[#22C55E] text-white hover:bg-green-600',
      outline: 'bg-white text-[#3E63DD] border border-[#3E63DD] hover:bg-blue-50',
      ghost: 'text-[#3E63DD] hover:bg-blue-50',
    };

    const width = this.fullWidth ? 'w-full' : '';
    const dis = this.disabled || this.loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

    return [base, sizes[this.size], variants[this.variant], width, dis].join(' ');
  }
}

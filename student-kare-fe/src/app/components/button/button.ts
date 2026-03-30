import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() label: string = 'Button';
  @Input() variant: 'primary' | 'secondary' | 'outline' | 'ghost' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() fullWidth: boolean = false;
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() type: 'button' | 'submit' = 'button';

  get classes(): string {
    const base = 'inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-200 focus:outline-none';

    const sizes: Record<string, string> = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const variants: Record<string, string> = {
      primary:   'bg-[#FF5A1F] text-white hover:bg-orange-600 active:scale-95 shadow-md',
      secondary: 'bg-[#22C55E] text-white hover:bg-green-600 active:scale-95 shadow-md',
      outline:   'border-2 border-[#FF5A1F] text-[#FF5A1F] hover:bg-orange-50 active:scale-95',
      ghost:     'text-[#FF5A1F] hover:bg-orange-50 active:scale-95',
    };

    const width = this.fullWidth ? 'w-full' : '';
    const dis   = this.disabled || this.loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

    return `${base} ${sizes[this.size]} ${variants[this.variant]} ${width} ${dis}`;
  }
}

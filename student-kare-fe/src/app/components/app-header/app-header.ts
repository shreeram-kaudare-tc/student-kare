import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './app-header.html',
  styleUrl: './app-header.css',
})
export class AppHeader {
  @Input() title: string = '';
  @Input() showBack: boolean = true;
  @Input() showCart: boolean = false;
  @Input() cartCount: number = 0;
  @Output() backClick = new EventEmitter<void>();
  @Output() cartClick = new EventEmitter<void>();
  constructor(private router: Router) {}
  onBack() {
    if (this.backClick.observed) { this.backClick.emit(); }
    else { this.router.navigate(['/']); }
  }
  onCart() { this.cartClick.emit(); this.router.navigate(['/cart']); }
}
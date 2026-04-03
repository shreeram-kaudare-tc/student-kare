import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-bottom-nav',
  imports: [CommonModule, RouterModule],
  templateUrl: './bottom-nav.html',
  styleUrl: './bottom-nav.css',
})
export class BottomNav {
  @Input() cartCount: number = 0;
  navItems = [
    { label: 'Home',       route: '/home',     icon: 'home'   },
    { label: 'Categories', route: '/plp',      icon: 'shop'   },
    { label: 'Cart',       route: '/cart',     icon: 'cart'   },
    { label: 'My Order',     route: '/my-order', icon: 'orders' },
  ];
  constructor(public router: Router) {}
  isActive(route: string): boolean {
    return this.router.url === route || this.router.url.startsWith(route + '?');
  }
}
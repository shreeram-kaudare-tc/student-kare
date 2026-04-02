import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BottomNav } from '../../components/bottom-nav/bottom-nav';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  reviews: number;
  wishlisted: boolean;
  swipeOffset: number;
  swipeStartX: number;
}

@Component({
  selector: 'app-cart',
  imports: [CommonModule, BottomNav],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class CartPage {
  items: CartItem[] = [
    { id: 1, name: 'Wireless Headphone', price: 65, image: '/images/home/prod-reebok.png',   quantity: 1, reviews: 379, wishlisted: false, swipeOffset: 0, swipeStartX: 0 },
    { id: 2, name: 'Wireless Headphone', price: 65, image: '/images/home/prod-reebok.png',   quantity: 1, reviews: 379, wishlisted: false, swipeOffset: 0, swipeStartX: 0 },
    { id: 3, name: 'Wireless Headphone', price: 65, image: '/images/home/prod-reebok.png',   quantity: 1, reviews: 379, wishlisted: false, swipeOffset: 0, swipeStartX: 0 },
    { id: 4, name: 'Wireless Headphone', price: 65, image: '/images/home/prod-literacy.png', quantity: 1, reviews: 379, wishlisted: false, swipeOffset: 0, swipeStartX: 0 },
  ];

  constructor(public router: Router) {}

  get subtotal(): number {
    return this.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  }

  get totalItems(): number {
    return this.items.reduce((sum, i) => sum + i.quantity, 0);
  }

  goBack() { this.router.navigate(['/home']); }

  increment(item: CartItem) { item.quantity++; this.closeAllSwipes(item.id); }
  decrement(item: CartItem) { if (item.quantity > 1) item.quantity--; this.closeAllSwipes(item.id); }
  toggleWishlist(item: CartItem) { item.wishlisted = !item.wishlisted; }

  removeItem(id: number) {
    this.items = this.items.filter(i => i.id !== id);
  }

  closeAllSwipes(exceptId?: number) {
    this.items.forEach(i => { if (i.id !== exceptId) i.swipeOffset = 0; });
  }

  // ── Touch / pointer swipe handlers ──
  onSwipeStart(item: CartItem, e: TouchEvent | MouseEvent) {
    this.closeAllSwipes(item.id);
    item.swipeStartX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
  }

  onSwipeMove(item: CartItem, e: TouchEvent | MouseEvent) {
    const currentX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    const dx = currentX - item.swipeStartX;
    item.swipeOffset = Math.max(-90, Math.min(0, dx));
  }

  onSwipeEnd(item: CartItem) {
    item.swipeOffset = item.swipeOffset < -45 ? -90 : 0;
  }

  checkout() { this.router.navigate(['/my-order']); }
  goHome() { this.router.navigate(['/home']); }
}

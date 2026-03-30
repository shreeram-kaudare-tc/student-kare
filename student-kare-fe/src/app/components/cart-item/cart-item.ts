import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CartItemData {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-cart-item',
  imports: [CommonModule],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.css',
})
export class CartItem {
  @Input() item!: CartItemData;
  @Output() increase = new EventEmitter<number>();
  @Output() decrease = new EventEmitter<number>();
  @Output() remove   = new EventEmitter<number>();
  onIncrease() { this.increase.emit(this.item.id); }
  onDecrease() { this.decrease.emit(this.item.id); }
  onRemove()   { this.remove.emit(this.item.id);   }
  get total(): number { return this.item.price * this.item.quantity; }
}
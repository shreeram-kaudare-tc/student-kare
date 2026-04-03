import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface PlpProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  wishlisted?: boolean;
  quantity?: number;
}

@Component({
  selector: 'app-plp-product-card',
  imports: [CommonModule],
  templateUrl: './plp-product-card.html',
  styleUrl: './plp-product-card.css',
})
export class PlpProductCard {
  @Input() product!: PlpProduct;
  /** 'home' = filled gradient "Add To Cart" button | 'plp' = outlined "Add 🛒" button */
  @Input() variant: 'home' | 'plp' = 'home';
  @Output() addToCart = new EventEmitter<{ product: PlpProduct; event: MouseEvent }>();
  @Output() toggleWishlist = new EventEmitter<PlpProduct>();
  @Output() decreaseQuantity = new EventEmitter<PlpProduct>();
  @Output() increaseQuantity = new EventEmitter<PlpProduct>();

  onAdd(e: MouseEvent) {
    e.stopPropagation();
    this.addToCart.emit({ product: this.product, event: e });
  }

  onDecrease(e: MouseEvent) {
    e.stopPropagation();
    this.decreaseQuantity.emit(this.product);
  }

  onIncrease(e: MouseEvent) {
    e.stopPropagation();
    this.increaseQuantity.emit(this.product);
  }

  onWishlist(e: Event) {
    e.stopPropagation();
    this.toggleWishlist.emit(this.product);
  }
}

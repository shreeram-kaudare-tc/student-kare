import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface PlpProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  wishlisted?: boolean;
}

@Component({
  selector: 'app-plp-product-card',
  imports: [CommonModule],
  templateUrl: './plp-product-card.html',
  styleUrl: './plp-product-card.css',
})
export class PlpProductCard {
  @Input() product!: PlpProduct;
  @Output() addToCart = new EventEmitter<{ product: PlpProduct; event: MouseEvent }>();
  @Output() toggleWishlist = new EventEmitter<PlpProduct>();

  onAdd(e: MouseEvent) {
    e.stopPropagation();
    this.addToCart.emit({ product: this.product, event: e });
  }

  onWishlist(e: Event) {
    e.stopPropagation();
    this.toggleWishlist.emit(this.product);
  }
}

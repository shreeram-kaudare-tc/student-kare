import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { PlpProductCard, PlpProduct } from '../../components/plp-product-card/plp-product-card';
import { CategoryChip } from '../../components/category-chip/category-chip';
import { FilterSheet } from '../../components/filter-sheet/filter-sheet';

interface SideCategory {
  label: string;
  image: string;
}

interface FlyingItem {
  id: number;
  image: string;
  startX: number;
  startY: number;
  dx: number;
  dy: number;
}

@Component({
  selector: 'app-plp',
  imports: [CommonModule, PlpProductCard, CategoryChip, FilterSheet],
  templateUrl: './plp.html',
  styleUrl: './plp.css',
})
export class PlpPage implements OnInit {
  activeCategory = 0;
  activeFilter = 'All';
  cartCount = 0;
  cartItems: PlpProduct[] = [];
  flyingItems: FlyingItem[] = [];
  filterSheetOpen = false;

  sideCategories = [
    { label: 'Uniforms', image: 'images/home/cat-shirt.png' },
    { label: 'Schoolbags', image: 'images/home/cat-bag.png' },
    { label: 'Books', image: 'images/home/cat-books.png' },
    { label: 'Footwear', image: 'images/home/cat-shoes.png' },
    { label: 'Skill Kits', image: 'images/home/prod-war-engine.png' },
    { label: 'Sports', image: 'images/home/cat-football.png' },
    { label: 'IDs', image: 'images/home/cat-idcard.png' },
    { label: 'Stationery', image: 'images/home/cat-books-glasses.png' },
  ];

  filters = ['All', 'Regular', 'Winter', 'Sports'];

  products: PlpProduct[] = [
    { id: 1, name: 'VIBGYOR High Primary and Secondar Red', price: 600, image: 'images/home/prod-reebok.png', quantity: 0 },
    { id: 2, name: 'Foundational Literacy (Edition 24–25)', price: 400, image: 'images/home/prod-literacy.png', quantity: 0 },
    { id: 3, name: 'VIBGYOR High Primary and Secondar Red (Edition 24-25)....', price: 800, image: 'images/home/prod-war-engine.png', quantity: 0 },
    { id: 4, name: 'Eco-Friendly School Bag', price: 1200, image: 'images/home/prod-reebok.png', quantity: 0 },
    { id: 5, name: 'Cotton Uniform Shirt', price: 300, image: 'images/home/cat-shirt.png', quantity: 0 },
    { id: 6, name: 'Standard School Uniform', price: 600, image: 'images/home/cat-shirt.png', quantity: 0 },
    { id: 7, name: 'School Sports Kit', price: 600, image: 'images/home/cat-football.png', quantity: 0 },
    { id: 8, name: 'Regular School Shoes', price: 600, image: 'images/home/cat-shoes.png', quantity: 0 },
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const catIndex = params['cat'];
      if (catIndex !== undefined) this.activeCategory = +catIndex;
    });
  }

  goBack() { this.router.navigate(['/home']); }
  selectCategory(i: number) { this.activeCategory = i; }
  selectFilter(f: string) { this.activeFilter = f; }

  addToCart(payload: { product: PlpProduct; event: MouseEvent }) {
    const { product, event } = payload;
    product.quantity = 1;
    const btn = event.currentTarget as HTMLElement;
    const btnRect = btn.getBoundingClientRect();

    // Calculate fly start position (centre of the Add button)
    const startX = btnRect.left + btnRect.width / 2 - 19;
    const startY = btnRect.top + btnRect.height / 2 - 19;

    // Target: the cart bar (fixed bottom, ~78px from bottom, left ~120px)
    const targetX = 120 + 30;   // sidebar(93) + left padding + thumbnail area centre
    const targetY = window.innerHeight - 78;

    const flyId = Date.now();
    this.flyingItems = [
      ...this.flyingItems,
      { id: flyId, image: product.image, startX, startY, dx: targetX - startX, dy: targetY - startY },
    ];

    // Update cart mid-animation
    setTimeout(() => {
      const existing = this.cartItems.find(p => p.id === product.id);
      if (!existing) {
        this.cartItems = [...this.cartItems, product];
      }
      this.updateCartCount();
    }, 280);

    // Remove flying element after animation
    setTimeout(() => {
      this.flyingItems = this.flyingItems.filter(f => f.id !== flyId);
    }, 500);
  }

  private updateCartCount() {
    this.cartCount = this.cartItems.reduce((acc, item) => acc + (item.quantity || 0), 0);
  }

  increaseProductQuantity(product: PlpProduct) {
    if (product.quantity !== undefined) {
      product.quantity++;
      this.updateCartCount();
    }
  }

  decreaseProductQuantity(product: PlpProduct) {
    if (product.quantity !== undefined && product.quantity > 0) {
      product.quantity--;
      if (product.quantity === 0) {
        this.cartItems = this.cartItems.filter(p => p.id !== product.id);
      }
      this.updateCartCount();
    }
  }

  isRotating = false;
  rotateCartThumbnails() {
    if (this.cartItems.length > 1 && !this.isRotating) {
      this.isRotating = true;

      // Delay the actual data shift to let CSS animation run
      setTimeout(() => {
        const first = this.cartItems.shift()!;
        this.cartItems.push(first);
        this.cartItems = [...this.cartItems];
        this.isRotating = false;
      }, 300);
    }
  }

  toggleWishlist(product: PlpProduct) {
    const p = this.products.find(x => x.id === product.id);
    if (p) p.wishlisted = !p.wishlisted;
  }

  viewCart() { this.router.navigate(['/cart']); }
  openFilter() { this.filterSheetOpen = true; }
  onFilterClosed() { this.filterSheetOpen = false; }

  flyStyle(item: FlyingItem): string {
    return `left:${item.startX}px; top:${item.startY}px; --tx:${item.dx}px; --ty:${item.dy}px`;
  }
}

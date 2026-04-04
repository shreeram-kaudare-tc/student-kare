import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BottomNav } from '../../components/bottom-nav/bottom-nav';

interface Order {
  id: number;
  name: string;
  size: string;
  quantity: number;
  price: number;
  image: string;
  status: 'active' | 'completed' | 'canceled';
}

@Component({
  selector: 'app-my-order',
  imports: [CommonModule, BottomNav],
  templateUrl: './my-order.html',
  styleUrl: './my-order.css',
})
export class MyOrderPage {
  activeTab: 'active' | 'completed' | 'canceled' = 'active';
  activeChip = 'All';

  tabs: { key: 'active' | 'completed' | 'canceled'; label: string }[] = [
    { key: 'active', label: 'Active' },
    { key: 'completed', label: 'Completed' },
    { key: 'canceled', label: 'Canceled' },
  ];

  chips = ['All', 'Return', 'Exchange'];

  orders: Order[] = [
    { id: 1, name: 'JuniorMBA Artificial Intelligence', size: '25', quantity: 10, price: 50000, image: '/images/home/cat-shirt.png', status: 'active' },
    { id: 2, name: 'JuniorMBA Artificial Intelligence', size: '25', quantity: 10, price: 50000, image: '/images/home/cat-shoes.png', status: 'active' },
    { id: 3, name: 'JuniorMBA Artificial Intelligence', size: '25', quantity: 10, price: 50000, image: '/images/home/like-space-explorer.png', status: 'active' },
    { id: 4, name: 'JuniorMBA Artificial Intelligence', size: '25', quantity: 10, price: 50000, image: '/images/home/prod-reebok.png', status: 'active' },
    { id: 5, name: 'JuniorMBA Artificial Intelligence', size: '25', quantity: 10, price: 50000, image: '/images/home/cat-shoes.png', status: 'active' },
    { id: 8, name: 'JuniorMBA Artificial Intelligence', size: '25', quantity: 10, price: 50000, image: '/images/home/cat-abc.png', status: 'active' },
    { id: 9, name: 'JuniorMBA Artificial Intelligence', size: '25', quantity: 10, price: 50000, image: '/images/home/prod-literacy.png', status: 'active' },
    { id: 6, name: 'JuniorMBA Artificial Intelligence', size: '25', quantity: 10, price: 50000, image: '/images/home/cat-bag.png', status: 'completed' },
    { id: 7, name: 'JuniorMBA Artificial Intelligence', size: '25', quantity: 10, price: 50000, image: '/images/home/cat-abc.png', status: 'canceled' },
  ];

  selectedOrderIds = new Set<number>();

  constructor(public router: Router) { }

  get filteredOrders(): Order[] {
    return this.orders.filter(o => o.status === this.activeTab);
  }

  goBack() { this.router.navigate(['/cart']); }
  trackOrder(order: Order) {
    if (this.selectedOrderIds.has(order.id)) {
      this.selectedOrderIds.delete(order.id);
    } else {
      this.selectedOrderIds.add(order.id);
    }
    this.selectedOrderIds = new Set(this.selectedOrderIds);
  }
}

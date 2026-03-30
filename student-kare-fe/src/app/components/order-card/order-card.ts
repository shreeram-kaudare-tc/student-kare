import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface OrderData {
  id: string;
  date: string;
  status: 'pending' | 'processing' | 'delivered' | 'cancelled';
  items: { name: string; quantity: number; price: number }[];
  total: number;
}

@Component({
  selector: 'app-order-card',
  imports: [CommonModule],
  templateUrl: './order-card.html',
  styleUrl: './order-card.css',
})
export class OrderCard {
  @Input() order!: OrderData;
  get statusColor(): string {
    const map: Record<string, string> = {
      pending: 'bg-yellow-100 text-yellow-700',
      processing: 'bg-blue-100 text-blue-700',
      delivered: 'bg-green-100 text-green-700',
      cancelled: 'bg-red-100 text-red-700',
    };
    return map[this.order.status] || 'bg-gray-100 text-gray-700';
  }
  get statusLabel(): string {
    const map: Record<string, string> = { pending: 'Pending', processing: 'Processing', delivered: 'Delivered', cancelled: 'Cancelled' };
    return map[this.order.status] || this.order.status;
  }
}
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BottomNav } from '../../components/bottom-nav/bottom-nav';
import { PlpProductCard } from '../../components/plp-product-card/plp-product-card';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, BottomNav, PlpProductCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit, OnDestroy {
  bannerIndex = 0;
  private bannerInterval: any;

  banners = [
    {
      image: '/images/home/banner-school-bags.png',
    },
    {
      image: '/images/home/banner-school-bags.png',
    },
    {
      image: '/images/home/banner-school-bags.png',
    },
  ];

  categories = [
    { label: 'Uniform', image: '/images/home/cat-shirt.png' },
    { label: 'School Bag', image: '/images/home/cat-bag.png' },
    { label: 'Books', image: '/images/home/cat-abc.png' },
    { label: 'Shoes', image: '/images/home/cat-shoes.png' },
    { label: 'Study Books', image: '/images/home/cat-books-glasses.png' },
    { label: 'Drone', image: '/images/home/cat-drone.png' },
    { label: 'Football', image: '/images/home/cat-football.png' },
    { label: 'ID Card', image: '/images/home/cat-idcard.png' },
    { label: 'Stationery', image: '/images/home/cat-books.png' },
  ];

  youMayAlsoLike = [
    { label: 'SPACE EXPLORER', image: '/images/home/like-space-explorer.png' },
    { label: 'SANDALS', image: '/images/home/like-sandals.png' },
    { label: 'FOOTBALL', image: '/images/home/like-football.png' },
  ];

  products = [
    { id: 101, name: 'VIBGYOR High Primary and Secondary Red (Edition 24-25)....', image: '/images/home/prod-literacy.png', price: 600, quantity: 0 },
    { id: 102, name: 'VIBGYOR High Primary and Secondary Red (Edition 24-25)....', image: '/images/home/prod-reebok.png', price: 600, quantity: 0 },
    { id: 103, name: 'VIBGYOR High Primary and Secondary Red (Edition 24-25)....', image: '/images/home/prod-war-engine.png', price: 400, quantity: 0 },
  ];

  constructor(public router: Router) { }

  ngOnInit() {
    this.startBannerAutoScroll();
  }

  ngOnDestroy() {
    clearInterval(this.bannerInterval);
  }

  startBannerAutoScroll() {
    this.bannerInterval = setInterval(() => {
      this.bannerIndex = (this.bannerIndex + 1) % this.banners.length;
    }, 3000);
  }

  setBanner(i: number) {
    this.bannerIndex = i;
    clearInterval(this.bannerInterval);
    this.startBannerAutoScroll();
  }
  shopNow() { this.router.navigate(['/plp']); }
  addToCart(product: any) { }
  handleWishlist(product: any) {
    product.wishlisted = !product.wishlisted;
  }
  goToPlp(catIndex: number) { this.router.navigate(['/plp'], { queryParams: { cat: catIndex } }); }
}

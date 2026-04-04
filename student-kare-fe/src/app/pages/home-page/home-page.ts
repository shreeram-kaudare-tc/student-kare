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
    { image: '/images/home/banner-school-bags.png', filter: 'hue-rotate(0deg)' },
    { image: '/images/home/banner-school-bags.png', filter: 'hue-rotate(140deg)' },
    { image: '/images/home/banner-school-bags.png', filter: 'hue-rotate(250deg)' },
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

  bannerStartX = 0;
  bannerOffset = 0;
  isSwiping = false;

  onBannerTouchStart(e: TouchEvent | MouseEvent) {
    this.bannerStartX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    this.isSwiping = true;
    clearInterval(this.bannerInterval);
  }

  onBannerTouchMove(e: TouchEvent | MouseEvent) {
    if (!this.isSwiping) return;
    const currentX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    const diff = currentX - this.bannerStartX;
    const containerWidth = (e.currentTarget as HTMLElement).offsetWidth;
    this.bannerOffset = (diff / containerWidth) * 100;
  }

  onBannerTouchEnd(e: TouchEvent | MouseEvent) {
    if (!this.isSwiping) return;
    this.isSwiping = false;
    
    if (this.bannerOffset < -20) {
      this.bannerIndex = (this.bannerIndex + 1) % this.banners.length;
    } else if (this.bannerOffset > 20) {
      this.bannerIndex = (this.bannerIndex - 1 + this.banners.length) % this.banners.length;
    }
    
    this.bannerOffset = 0;
    this.startBannerAutoScroll();
  }

  secondaryIndex = 0;
  secondaryOffset = 0;
  secondaryStartX = 0;
  isSecondarySwiping = false;

  secondaryBanners = [
    { 
      titleLines: ['20% OFF DURING THE', 'WEEKEND'], 
      image: '/images/home/offer-bags.png', 
      bg: 'rgba(241, 117, 71, 1)' 
    },
    { 
      titleLines: ['GET READY FOR', 'NEW SESSION'], 
      image: '/images/home/offer-bags.png', 
      bg: '#4628BE' 
    },
    { 
      titleLines: ['BACKPACK SPECIAL', 'OFFER'], 
      image: '/images/home/offer-bags.png', 
      bg: '#9A84F5' 
    },
  ];

  onSecondaryTouchStart(e: TouchEvent | MouseEvent) {
    this.secondaryStartX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    this.isSecondarySwiping = true;
  }

  onSecondaryTouchMove(e: TouchEvent | MouseEvent) {
    if (!this.isSecondarySwiping) return;
    const currentX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    const diff = currentX - this.secondaryStartX;
    const containerWidth = (e.currentTarget as HTMLElement).offsetWidth;
    this.secondaryOffset = (diff / containerWidth) * 100;
  }

  onSecondaryTouchEnd(e: TouchEvent | MouseEvent) {
    if (!this.isSecondarySwiping) return;
    this.isSecondarySwiping = false;

    if (this.secondaryOffset < -20) {
      this.secondaryIndex = (this.secondaryIndex + 1) % this.secondaryBanners.length;
    } else if (this.secondaryOffset > 20) {
      this.secondaryIndex = (this.secondaryIndex - 1 + this.secondaryBanners.length) % this.secondaryBanners.length;
    }

    this.secondaryOffset = 0;
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

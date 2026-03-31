import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BottomNav } from '../../components/bottom-nav/bottom-nav';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, BottomNav],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  bannerIndex = 0;

  banners = [
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
    { name: 'Foundational Literacy', image: '/images/home/prod-literacy.png', price: 400 },
    { name: 'VIBGYOR High Premium Shoes', image: '/images/home/prod-reebok.png', price: 400 },
    { name: 'War Engine Kit', image: '/images/home/prod-war-engine.png', price: 400 },
  ];

  constructor(public router: Router) {}

  setBanner(i: number) { this.bannerIndex = i; }
  shopNow() { this.router.navigate(['/plp']); }
  addToCart(product: any) {}
  goToPlp(catIndex: number) { this.router.navigate(['/plp'], { queryParams: { cat: catIndex } }); }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Slide {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-onboarding',
  imports: [CommonModule],
  templateUrl: './onboarding.html',
  styleUrl: './onboarding.css',
})
export class Onboarding {
  currentIndex = 0;

  slides: Slide[] = [
    {
      image: 'images/onboarding/slide-1.png',
      title: 'Choose your order',
      description:
        'Regular Fit Half Sleeve Polo T-Shirt made of comfortable Cotton Polyester Pique fabric with Embroidered logo at left',
    },
    {
      image: 'images/onboarding/slide-2.png',
      title: 'Choose your product',
      description:
        'Regular Fit Half Sleeve Polo T-Shirt made of comfortable Cotton Polyester Pique fabric with Embroidered logo at left',
    },
    {
      image: 'images/onboarding/slide-3.png',
      title: 'Fast Delivery',
      description:
        'Regular Fit Half Sleeve Polo T-Shirt made of comfortable Cotton Polyester Pique fabric with Embroidered logo at left',
    },
    {
      image: 'images/onboarding/slide-4.png',
      title: 'Promotions',
      description:
        'Regular Fit Half Sleeve Polo T-Shirt made of comfortable Cotton Polyester Pique fabric with Embroidered logo at left',
    },
  ];

  constructor(private router: Router) { }

  next() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
    } else {
      this.router.navigate(['/home']);
    }
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}

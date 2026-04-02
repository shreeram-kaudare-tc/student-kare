import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Slide {
  image: string;
  bgSvg: string;
  title: string;
  description: string;
  imgClass: string;
  bgClass: string;
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
      bgSvg: 'images/svg/onboarding-one.svg',
      title: 'Choose your order',
      description: 'Regular Fit Half Sleeve Polo T-Shirt made of comfortable Cotton Polyester Pique fabric with Embroidered logo at left',
      imgClass: 'w-[105.38vw] h-[105.38vw]',
      bgClass:  'bottom-0 w-[423.33vw] h-[123.33vw]',
    },
    {
      image: 'images/onboarding/slide-2.png',
      bgSvg: 'images/svg/onboarding-two.svg',
      title: 'Choose your product',
      description: 'Regular Fit Half Sleeve Polo T-Shirt made of comfortable Cotton Polyester Pique fabric with Embroidered logo at left',
      imgClass: 'w-[100vw] h-[100vw]',
      bgClass:  'bottom-[30px] w-[423.33vw] h-[123.33vw]',
    },
    {
      image: 'images/onboarding/slide-3.png',
      bgSvg: 'images/svg/onboarding-three.svg',
      title: 'Fast Delivery',
      description: 'Regular Fit Half Sleeve Polo T-Shirt made of comfortable Cotton Polyester Pique fabric with Embroidered logo at left',
      imgClass: 'w-[119.74vw] h-[86.15vw]',
      bgClass:  'bottom-[30px] w-[423.33vw] h-[123.33vw]',
    },
    {
      image: 'images/onboarding/slide-4.png',
      bgSvg: 'images/svg/onboarding-four.svg',
      title: 'Promotions',
      description: 'Regular Fit Half Sleeve Polo T-Shirt made of comfortable Cotton Polyester Pique fabric with Embroidered logo at left',
      imgClass: 'w-[88.97vw] h-[88.97vw]',
      bgClass:  'bottom-[90px] w-[430.00vw] h-[121.79vw]',
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

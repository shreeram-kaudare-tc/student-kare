import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Slide {
  image: string;
  bgSvg: string;
  title: string;
  description: string;
  imgStyle: { width: string; height: string; top: string; left: string };
  bg_svg_Style: { width: string; height: string; bottom: string; background: string };
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
      imgStyle: { width: '105.38vw', height: '105.38vw', top: '111px', left: '-4.10vw' },
      bg_svg_Style: { width: '423.33vw', height: '123.33vw', bottom: '0', background: 'linear-gradient(0deg, #3E63DD, #3E63DD), linear-gradient(90deg, #6B61FD 1%, #4E75F4 32.5%, #8060FF 90%)' },
    },
    {
      image: 'images/onboarding/slide-2.png',
      bgSvg: 'images/svg/onboarding-two.svg',
      title: 'Choose your product',
      description: 'Regular Fit Half Sleeve Polo T-Shirt made of comfortable Cotton Polyester Pique fabric with Embroidered logo at left',
      imgStyle: { width: '100vw', height: '100vw', top: '127px', left: '0.77vw' },
      bg_svg_Style: { width: '423.33vw', height: '123.33vw', bottom: '30px', background: 'linear-gradient(0deg, #3E63DD, #3E63DD), linear-gradient(90deg, #6B61FD 1%, #4E75F4 32.5%, #8060FF 90%)' },
    },
    {
      image: 'images/onboarding/slide-3.png',
      bgSvg: 'images/svg/onboarding-three.svg',
      title: 'Fast Delivery',
      description: 'Regular Fit Half Sleeve Polo T-Shirt made of comfortable Cotton Polyester Pique fabric with Embroidered logo at left',
      imgStyle: { width: '119.74vw', height: '86.15vw', top: '172px', left: '-7.95vw' },
      bg_svg_Style: { width: '423.33vw', height: '123.33vw', bottom: '30px', background: 'linear-gradient(0deg, #3E63DD, #3E63DD), linear-gradient(90deg, #6B61FD 1%, #4E75F4 32.5%, #8060FF 90%)' },
    },
    {
      image: 'images/onboarding/slide-4.png',
      bgSvg: 'images/svg/onboarding-four.svg',
      title: 'Promotions',
      description: 'Regular Fit Half Sleeve Polo T-Shirt made of comfortable Cotton Polyester Pique fabric with Embroidered logo at left',
      imgStyle: { width: '88.97vw', height: '88.97vw', top: '183px', left: '2.82vw' },
      bg_svg_Style: { width: '430.00vw', height: '121.79vw', bottom: '90px', background: 'linear-gradient(0deg, #3E63DD, #3E63DD), linear-gradient(90deg, #6B61FD 1%, #4E75F4 32.5%, #8060FF 90%)' },
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

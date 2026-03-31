import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Button } from '../../components/button/button';

@Component({
  selector: 'app-login-one',
  imports: [CommonModule, Button],
  templateUrl: './login-one.html',
  styleUrl: './login-one.css',
})
export class LoginOne {
  constructor(private router: Router) {}

  row1 = [
    { img: 'images/login/img-jacket.png',       name: 'Jacket' },
    { img: 'images/login/img-shoes.png',        name: 'Shoes' },
    { img: 'images/login/img-activity-kit.png', name: 'Activity Kit' },
    { img: 'images/login/img-pink.png',         name: 'Item' },
  ];

  row2 = [
    { img: 'images/login/img-shorts.png',  name: 'Shorts' },
    { img: 'images/login/img-book.png',    name: 'Book' },
    { img: 'images/login/img-bottles.png', name: 'Bottles' },
    { img: 'images/login/img-item4.png',   name: 'Item4' },
  ];

  row3 = [
    { img: 'images/login/img-crane.png',     name: 'Crane' },
    { img: 'images/login/img-cosco.png',     name: 'Cosco Ball' },
    { img: 'images/login/img-space-kit.png', name: 'Space Kit' },
  ];

  loginWithVibgyor()    { this.router.navigate(['/home']);   }
  loginWithoutVibgyor() { this.router.navigate(['/login4']); }
  loginWithPhone()      { this.router.navigate(['/login3']); }
}

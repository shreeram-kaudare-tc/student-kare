import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthLayout1 } from '../../components/auth-layout1/auth-layout1';
import { InputField } from '../../components/input-field/input-field';
import { Button } from '../../components/button/button';

@Component({
  selector: 'app-login-four',
  imports: [CommonModule, FormsModule, AuthLayout1, InputField, Button],
  templateUrl: './login-four.html',
  styleUrl: './login-four.css',
})
export class LoginFour {
  loginMode: 'vibgyor' | 'without' = 'vibgyor';
  mobileNumber = '';

  constructor(private router: Router) {}

  setLoginMode(mode: 'vibgyor' | 'without') {
    this.loginMode = mode;
  }

  sendOtp() {
    const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();
    // TODO: integrate OTP API
    this.router.navigate(['/login3'], { queryParams: { mobile: this.mobileNumber, otp: randomOtp } });
  }

  register() {
    this.router.navigate(['/register']);
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthLayout1 } from '../../components/auth-layout1/auth-layout1';
import { InputField } from '../../components/input-field/input-field';
import { Button } from '../../components/button/button';

@Component({
  selector: 'app-login-three',
  imports: [CommonModule, FormsModule, AuthLayout1, InputField, Button],
  templateUrl: './login-three.html',
  styleUrl: './login-three.css',
})
export class LoginThree {
  loginMode: 'vibgyor' | 'without' = 'vibgyor';
  mobileNumber = '';
  otp = '';

  constructor(private router: Router) {}

  setLoginMode(mode: 'vibgyor' | 'without') {
    this.loginMode = mode;
  }

  resendOtp() {
    // TODO: resend OTP API
  }

  login() {
    // TODO: integrate login API
    this.router.navigate(['/home']);
  }

  register() {
    this.router.navigate(['/home']);
  }
}

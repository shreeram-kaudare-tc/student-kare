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
    if (!/^[0-9]{10}$/.test(this.mobileNumber)) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }
    // TODO: integrate OTP API
    this.router.navigate(['/login3']);
  }

  register() {
    this.router.navigate(['/register']);
  }
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthLayout1 } from '../../components/auth-layout1/auth-layout1';
import { InputField } from '../../components/input-field/input-field';
import { Button } from '../../components/button/button';

@Component({
  selector: 'app-login-three',
  imports: [CommonModule, FormsModule, AuthLayout1, InputField, Button],
  templateUrl: './login-three.html',
  styleUrl: './login-three.css',
})
export class LoginThree implements OnInit {
  loginMode: 'vibgyor' | 'without' = 'vibgyor';
  mobileNumber = '';
  otp = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['mobile']) {
        this.mobileNumber = params['mobile'];
      }
      if (params['otp']) {
        this.otp = params['otp'];
      }
    });
  }

  setLoginMode(mode: 'vibgyor' | 'without') {
    this.loginMode = mode;
  }

  resendOtp() {
    this.router.navigate(['/login4']);
  }

  login() {
    // TODO: integrate login API
    this.router.navigate(['/onboarding']);
  }

  register() {
    this.router.navigate(['/register']);
  }
}

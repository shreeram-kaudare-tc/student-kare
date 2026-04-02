import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputField } from '../../components/input-field/input-field';
import { Button } from '../../components/button/button';
import { DateInput } from '../../components/date-input/date-input';
@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, InputField, Button, DateInput],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  firstName = '';
  lastName = '';
  email = '';
  birthDate = '';
  phoneNumber = '';
  password = '';

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/login4']);
  }

  goToLogin() {
    this.router.navigate(['/login4']);
  }

  register() {
    // TODO: integrate register API
    this.router.navigate(['/onboarding']);
  }
}

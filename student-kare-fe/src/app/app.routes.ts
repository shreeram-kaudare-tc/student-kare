import { Routes } from '@angular/router';
import { LoginOne } from './pages/login-one/login-one';
import { LoginFour } from './pages/login-four/login-four';

export const routes: Routes = [
    { path: '', redirectTo: 'login4', pathMatch: 'full' },
    { path: 'login', component: LoginOne },
    { path: 'login4', component: LoginFour },
];

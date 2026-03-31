import { Routes } from '@angular/router';
import { LoginOne } from './pages/login-one/login-one';
import { LoginFour } from './pages/login-four/login-four';
import { LoginThree } from './pages/login-three/login-three';
import { Register } from './pages/register/register';
import { Onboarding } from './pages/onboarding/onboarding';
import { HomePage } from './pages/home-page/home-page';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'onboarding', component: Onboarding },
    { path: 'login', component: LoginOne },
    { path: 'login3', component: LoginThree },
    { path: 'login4', component: LoginFour },
    { path: 'register', component: Register },
    { path: 'home', component: HomePage },
];

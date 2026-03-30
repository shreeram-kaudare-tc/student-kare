import { Routes } from '@angular/router';
import { LoginOne } from './pages/login-one/login-one';
import { LoginFour } from './pages/login-four/login-four';
import { LoginThree } from './pages/login-three/login-three';

export const routes: Routes = [
    { path: '', redirectTo: 'login3', pathMatch: 'full' },
    { path: 'login', component: LoginOne },
    { path: 'login3', component: LoginThree },
    { path: 'login4', component: LoginFour },
];

import { Routes } from '@angular/router';
import { LoginOne } from './pages/login-one/login-one';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginOne },
];

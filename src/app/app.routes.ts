// app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AccountComponent } from './components/account/account.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, // Default to login page
  { path: 'login', component: LoginComponent }, // Login route
  { path: 'account', component: AccountComponent }, // Account route
  { path: 'profile', component: ProfileComponent },
];

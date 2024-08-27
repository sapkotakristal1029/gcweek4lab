// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  login() {
    // POST request to authenticate
    this.http
      .post<any>('http://localhost:3000/api/auth', {
        username: this.email,
        password: this.password,
      })
      .subscribe(
        (response) => {
          // Store user data in session storage (without password)
          sessionStorage.setItem('currentUser', JSON.stringify(response));
          this.router.navigate(['/account']); // Navigate to account page
        },
        (error) => {
          this.errorMessage = 'Invalid email or password';
        }
      );
  }
}

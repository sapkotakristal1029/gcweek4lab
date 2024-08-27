import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface User {
  username: string;
  birthdate: string;
  age: number;
  email: string;
  password: string;
  valid: boolean;
}

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent implements OnInit {
  constructor(private router: Router) {}
  currentUser: User | null = null; // Type the currentUser as User or null

  ngOnInit() {
    // Retrieve user data from sessionStorage
    const storedUser = sessionStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser) as User; // Parse and cast to User interface
    } else {
      console.log('No user data found in session storage.');
    }
  }

  editProfile() {
    this.router.navigate(['/profile']);
  }
  logout() {
    sessionStorage.clear();

    this.router.navigate(['/login']);
  }
}

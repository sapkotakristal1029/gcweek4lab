// profile.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// Define the User interface directly in the same file
interface User {
  username: string;
  birthdate: string;
  age: number;
  email: string;
  password: string;
  valid: boolean;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
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
  saveProfile() {
    if (this.currentUser) {
      // Save the updated user data back to sessionStorage
      sessionStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      alert('Profile updated successfully!');
    }
    this.router.navigate(['/account']);
  }
}

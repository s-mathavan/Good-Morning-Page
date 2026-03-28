// user-list.ts
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserDetailService, Page } from '../../services/userDetailService';
import { UserDetails } from '../../models/user-details';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList implements OnInit {
  @Input() showList = false;

  searchTerm: string = '';
  users: UserDetails[] = [];

  currentPage: number = 0;
  totalPages: number = 1;
  pageSize: number = 5;

  constructor(private userDetailService: UserDetailService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userDetailService.getAllUserDetails(this.currentPage, this.pageSize).subscribe({
      next: (page: Page<UserDetails>) => {
        this.users = page.content;
        this.totalPages = page.totalPages;
      },
      error: (err) => console.error('Error loading users:', err)
    });
  }

  onSearch() {
    if (this.searchTerm.trim()) {
      this.userDetailService.getUserByPhoneNumber(this.searchTerm).subscribe({
        next: (user) => {
          this.users = user ? [user] : [];
          this.totalPages = 1;
          this.currentPage = 0;
        },
        error: (err) => console.error('Error searching user:', err)
      });
    } else {
      this.loadUsers();
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadUsers();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadUsers();
    }
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserDetailService } from '../../services/userDetailService';
import { UserDetails } from '../../models/user-details';

@Component({
  selector: 'app-user-form',
  imports: [FormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css'
})
export class UserForm {
  @Input() showForm = false;
  @Output() formSubmitted = new EventEmitter<UserDetails>();

  name: string = '';
  email: string = '';
  phone: string = '';

  constructor(private userDetailService: UserDetailService) {}

  onSubmit() {
    const user: UserDetails = {
      userName: this.name,
      email: this.email,
      phoneNumber: this.phone
    };

    this.userDetailService.saveUserDetails(user).subscribe({
      next: (response: string) => {
        console.log('Response from backend:', response);
        this.formSubmitted.emit(user);
      },
      error: (err: any) => {
        console.error('Error saving user:', err);
      }
    });
  }
}
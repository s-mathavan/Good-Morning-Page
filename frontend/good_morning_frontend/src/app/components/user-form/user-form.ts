import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [FormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {
  @Input() showForm = false;

  name: string = '';
  email: string = '';
  phone: string = '';

  onSubmit() {
    console.log('User Information:');
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Phone:', this.phone);
  }
}

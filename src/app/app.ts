import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class app {
  showPwd = false;
  form = {
    email: '',
    password: '',
    remember: false,
  };

  togglePwd(): void {
    this.showPwd = !this.showPwd;
  }

  onSubmit(): void {
    // TODO: brancher AuthService
    console.log('Form submitted', this.form);
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router} from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  showPwd = false;
  form = {
    email: '',
    password: '',
    remember: false,
  };

  togglePwd(): void {
    this.showPwd = !this.showPwd;
  }
  constructor(private router: Router) {}

  onSubmit(): void {
        this.router.navigate(['/dashboard']);

  }
}

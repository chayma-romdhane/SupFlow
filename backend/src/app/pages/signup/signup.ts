import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css'],
})
export class SignupComponent {
  signupForm: FormGroup;
  showPassword = false;
  showConfirmPassword = false;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group(
      {
        fullName: ['', Validators.required],
        email: [
          '',
          [Validators.required, Validators.email, Validators.pattern(/^[A-Za-z0-9._%+-]+@supcom\.tn$/i)],
        ],
        role: ['', Validators.required],
        programYear: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
        acceptTerms: [false, Validators.requiredTrue],
      },
      { validators: [SignupComponent.passwordsMatchValidator] }
    );
  }

  togglePasswordVisibility(field: 'password' | 'confirm') {
    if (field === 'password') {
      this.showPassword = !this.showPassword;
    } else {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }
    console.log('Sign up data: ', this.signupForm.value);
    // ici tu feras l'appel API plus tard
  }

  private static passwordsMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return password && confirm && password !== confirm ? { passwordsMismatch: true } : null;
  }
}

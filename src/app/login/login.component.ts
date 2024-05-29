import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  protected readonly fb = inject(FormBuilder);

  form = this.fb.group({
    username: ['', { validators: [Validators.required] }],
    password: ['', { validators: [Validators.required] }],
  });

  onSubmit() {}
}

import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { LanguageDropdownComponent } from '../language/language-dropdown.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, LanguageDropdownComponent, TranslateModule, NgxValidateCoreModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  protected readonly fb = inject(FormBuilder);

  form = this.fb.group({
    username: ['', { validators: [Validators.required] }],
    password: ['', { validators: [Validators.required] }],
  });

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
  }
}

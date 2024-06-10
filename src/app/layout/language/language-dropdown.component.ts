import { Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { LanguageService } from '../../core/services';

@Component({
  selector: 'app-language-dropdown',
  standalone: true,
  imports: [ReactiveFormsModule, UpperCasePipe],
  templateUrl: './language-dropdown.component.html',
})
export class LanguageDropdownComponent implements OnInit {
  protected readonly fb = inject(FormBuilder);
  protected readonly languageService = inject(LanguageService);
  langs = signal<string[]>([]);

  form: UntypedFormGroup;

  ngOnInit(): void {
    this.langs.set(this.languageService.getLanguages());
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      language: [this.languageService.getDefaultLanguage()],
    });
  }

  langChange() {
    const language = this.form.get('language')?.value;
    if (!language) return;
    this.languageService.languageChanged(language);
  }
}

import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const defaultLanguageKey = 'defaultLanguage';
const defaultLanguages = ['tr', 'en'];

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  protected readonly translateService = inject(TranslateService);

  constructor() {
    this.translateService.addLangs(defaultLanguages);
    this.init();
  }

  init() {
    const localStorageDefaultLanguage = this.getDefaultLanguageFromLocaleStorage();
    this.setDefaultLanguageToLocaleStorage(localStorageDefaultLanguage || 'en');
    this.translateService.setDefaultLang(this.getDefaultLanguageFromLocaleStorage());
  }

  getDefaultLanguage() {
    return this.translateService.getDefaultLang();
  }

  setDefaultLanguage(lang: string = 'en') {
    return this.translateService.setDefaultLang(lang);
  }

  setDefaultLanguageToLocaleStorage(lang: string = 'en') {
    localStorage.setItem(defaultLanguageKey, lang);
  }

  getDefaultLanguageFromLocaleStorage(): string {
    return localStorage.getItem(defaultLanguageKey || 'en')!;
  }

  getLanguages() {
    return this.translateService.getLangs();
  }

  useLanguage(lang: string = 'en') {
    this.translateService.use(lang);
  }

  languageChanged(lang: string = 'en') {
    this.useLanguage(lang);
    this.setDefaultLanguageToLocaleStorage(lang);
    this.setDefaultLanguage(this.getDefaultLanguageFromLocaleStorage());
  }
}

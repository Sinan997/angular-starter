import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BLUEPRINTS, NgxValidateCoreModule } from '@ngx-validate/core';
import { MessageService } from 'primeng/api';
import { CustomErrorComponent } from './customerror.component';
import { routes } from './app.routes';
import { API_URL } from './tokens/api-url';
import { LanguageService } from './core/services/language.service';
import { accessTokenInterceptor, errorHandlerInterceptor } from './core/interceptors';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withInterceptors([accessTokenInterceptor, errorHandlerInterceptor])),
    importProvidersFrom(
      NgxValidateCoreModule.forRoot({
        errorTemplate: CustomErrorComponent,
        blueprints: { ...BLUEPRINTS },
      }),
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      }),
    ),
    MessageService,
    { provide: API_URL, useValue: 'http://localhost:3000/' },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [LanguageService],
      useFactory: () => () => {},
    },
  ],
};

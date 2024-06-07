import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { EMPTY, Observable, catchError, of, switchMap, tap, throwError } from 'rxjs';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../services';
import { isCodeTranslated } from '../utils';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const messageService = inject(MessageService);
  const translateService = inject(TranslateService);

  const errorPrefix = 'error.';

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === 401) {
        return handle401Error(req, next);
      }
      if (err.status === 403) {
        authService.logout();
        return EMPTY;
      }
      handleWithToast(err);
      return throwError(() => err);
    }),
  );

  function handleWithToast(err: HttpErrorResponse) {
    const message = translateService.instant(errorPrefix + err.error.code, err.error.data);

    const isTranslated = isCodeTranslated(errorPrefix, message);
    const errorKey = translateService.instant('errorKey');

    messageService.add({
      severity: 'error',
      summary: errorKey,
      detail: isTranslated ? message : err.error.message,
    });
  }

  function handle401Error(request: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    return authService.refreshTokenHttp().pipe(
      catchError(() => {
        authService.logout();
        return of();
      }),
      tap((res) => {
        authService.setTokensToLocalStorage(res.accessToken, res.refreshToken);
      }),
      switchMap((res) => {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${res.accessToken}`,
          },
        });
        authService.setTokensToLocalStorage(res.accessToken, res.refreshToken);
        return next(request).pipe(
          catchError((err) => {
            handleWithToast(err);
            return throwError(() => err);
          }),
        );
      }),
    );
  }
};

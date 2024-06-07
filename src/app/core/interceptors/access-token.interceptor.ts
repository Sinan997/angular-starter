import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const accessTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const user = inject(AuthService).user;
  const token = localStorage.getItem('accessToken');

  if (user && token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return next(req);
};

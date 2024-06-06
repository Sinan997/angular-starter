import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

export const emptyGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.user) {
    router.navigate(['account', 'login']);
    return false;
  }
  router.navigate(['first']);
  return true;
};

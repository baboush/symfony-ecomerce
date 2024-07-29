import { inject } from '@angular/core';
import { AuthService } from '../services';
import { Router } from '@angular/router';

export const AuthAdminGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const role = auth.getRole();

  if (!auth.authenticated() && !role) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};

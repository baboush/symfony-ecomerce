import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/services';

@Component({
  selector: 'logout',
  standalone: true,
  template: ` <button (click)="logout()">Logout</button> `,
})
export default class LogoutComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}

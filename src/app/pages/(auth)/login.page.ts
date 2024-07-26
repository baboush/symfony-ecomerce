import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FormAuthComponent } from '@app/features/auth/components';
import { AuthService } from '@app/core/services';
import { FieldInput, UserCredentials } from '@app/shared/interfaces';
import { emailRegex, passwordRegex } from '@app/shared/utils';
import { jwtDecode } from 'jwt-decode';
import { tap } from 'rxjs';

interface LoginResponse {
  token: string;
}

interface Roles {
  roles: string[];
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormAuthComponent, ReactiveFormsModule, RouterLink],
  template: `
    <div class="header-connection">
      <h1 class="header-connection-title">Connexion</h1>
      <p class="header-connection-paragraph">
        Connectez-vous pour accéder à votre espace personnel.
      </p>
    </div>
    <app-form-auth
      [formGroup]="loginFrom"
      [userInput]="loginInputField"
      [actionForm]="'Se connecter'"
      (userCredentials)="login($event)"
    />
    <div class="footer-connection">
      <p>Pas encore de compte ?</p>
      <a class="footer-connection-link" routerLink="/register">Créer en un</a>
    </div>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: auto;
      gap: 2rem;

      .footer-connection {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;
        padding: 1rem;
        color: #828282;
        font-weight: 400;
        font-family: 'Inter', sans-serif;
        &-link {
          text-decoration: underline;
        }
      }
    }
  `,
})
export default class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);

  loginFrom = this.fb.group({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern(emailRegex),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(passwordRegex),
    ]),
  });

  loginInputField: FieldInput[] = [
    {
      labelFor: 'Email',
      inputId: 'email',
      inputType: 'email',
      formControlName: 'email',
    },
    {
      labelFor: 'Password',
      inputId: 'password',
      inputType: 'password',
      formControlName: 'password',
    },
  ];

  login(user: UserCredentials) {
    if (this.loginFrom.valid) {
      const loggedUser = {
        username: user.email,
        password: user.password,
      };
      this.authService
        .login(loggedUser)
        .pipe(
          takeUntilDestroyed(this.destroyRef),
          tap((response) => {
            if (!!response && !!response.body) this.tokenStorage(response.body);
            this.redirectTo();
          }),
        )
        .subscribe({
          next: () => this.redirectTo(),
          error: (error) => console.error(error),
        });
    }
  }

  tokenStorage(response: LoginResponse) {
    localStorage.setItem('token', response.token);
  }

  redirectTo() {
    const token = localStorage.getItem('token');
    if (!!token) {
      const tokenDecoded = jwtDecode<Roles>(token);
      if (tokenDecoded.roles.includes('ROLE_ADMIN')) {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/']);
      }
    }
  }
}

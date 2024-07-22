import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FormAuthComponent } from '@app/core/components';
import { AuthFieldInput } from '@app/shared/interfaces';
import { emailRegex, passwordRegex } from '@app/shared/utils';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormAuthComponent, ReactiveFormsModule, RouterLink],
  template: `
    <div class="header-connection">
      <h1 class="header-connection-title">Connexion</h1>
      <p class="header-conection-paragraph">
        Connectez-vous pour accéder à votre espace personnel.
      </p>
    </div>
    <app-form-auth [formGroup]="loginFrom" [userInput]="loginInputField" />
    <div class="footer-connection">
      <p>Pas encore de compte ?</p>
      <a class="footer-connection-link" routerLink="/sigIn">Créer en un</a>
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

  loginInputField: AuthFieldInput[] = [
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
}

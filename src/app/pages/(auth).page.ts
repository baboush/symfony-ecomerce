import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import HeaderComponent from '../core/components/header.component';

@Component({
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header />
    <router-outlet />
  `,
})
export default class AuthComponent {}

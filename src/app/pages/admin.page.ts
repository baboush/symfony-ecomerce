import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import LogoutComponent from '../shared/components/logout.component';

@Component({
  standalone: true,
  imports: [RouterOutlet, LogoutComponent],
  template: `
    <logout />
    <router-outlet />
  `,
})
export default class AdminComponent {}

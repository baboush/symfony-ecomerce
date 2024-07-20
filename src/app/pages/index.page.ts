import { Component, signal } from '@angular/core';
import HeaderComponent from '../core/components/header';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  template: ` <app-header /> `,
  styles: [],
})
export default class HomeComponent {}

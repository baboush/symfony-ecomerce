import { Component } from '@angular/core';
import {
  HeaderComponent,
  CardComponent,
  FooterComponent,
} from '@app/core/components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CardComponent, FooterComponent],
  template: ` <app-header />
    <main class="container">
      <app-card [product]="product" />
    </main>
    <app-footer />`,
  styles: `
    host: {
    }
  `,
})
export default class HomeComponent {
  product = {
    title: 'Product 1',
    price: 100,
    image: '../../../public/Images/Sneakers/AirJordan4MidnightNavy.webp',
    brand: 'Brand 1',
  };

  constructor() {}
}

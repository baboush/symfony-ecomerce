import { Component } from '@angular/core';
import {
  HeaderComponent,
  CardComponent,
  FooterComponent,
  BannerComponent,
} from '@app/core/components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CardComponent, FooterComponent, BannerComponent],
  template: ` <app-header />
    <main class="container">
      <app-banner />
      <app-card [product]="product" />
    </main>
    <app-footer />`,
  styles: `
    host: {
      position: relative;
      min-height: 100%;
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

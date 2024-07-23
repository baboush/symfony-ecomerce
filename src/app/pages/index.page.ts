import { Component } from '@angular/core';
import {
  HeaderComponent,
  CardComponent,
  FooterComponent,
  BannerComponent,
  CardBrandComponent,
} from '@app/core/components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    CardComponent,
    FooterComponent,
    BannerComponent,
    CardBrandComponent,
  ],
  template: ` <app-header />
    <main class="container">
      <app-banner />
      <app-card [product]="product" />
      <app-card-brand
        [imgSrc]="'../../../public/Images/Sneakers/AirJordan4MidnightNavy.webp'"
        [imgAlt]="'icon marque'"
        [brandName]="'Addidas'"
      />
    </main>
    <app-footer />`,
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

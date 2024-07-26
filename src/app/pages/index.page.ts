import { Component } from '@angular/core';
import {
  HeaderComponent,
  CardComponent,
  FooterComponent,
  BannerComponent,
  CardBrandComponent,
  CardBrandCarouselComponent,
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
    CardBrandCarouselComponent,
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
      <app-card-brand-carousel
        [brandName]="'Nike'"
        [imgSrc]="'../../../public/Images/Marques/nike.webp'"
        [altImg]="'marque exemple'"
      />
    </main>
    <app-footer />`,
  styles: ``,
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

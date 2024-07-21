import { Component, Signal, signal } from '@angular/core';
import HeaderComponent from '../core/components/header.component';
import CardComponent from '../core/components/card.component';
import { getProducts } from '../services/products.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CardComponent],
  template: ` <app-header />
    <app-card [product]="product" />`,
  styles: [],
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

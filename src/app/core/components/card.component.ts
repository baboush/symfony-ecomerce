import { Component, input } from '@angular/core';

export interface ProductCard {
  title: string;
  price: number;
  image: string;
  brand: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    @if (product()) {
      <div class="card">
        <span class="card-info">New</span>
        <div class="card-image">
          <img
            class="card-image-item"
            src="{{ product()?.image }}"
            alt="image représentant le produit {{ product()?.title }}"
          />
        </div>
        <div class="card-content">
          <h2 class="card-content-title">
            {{ product()?.title }}
          </h2>
          <p class="card-content-price">{{ product()?.price }} €</p>
          <p class="card-content-brand">{{ product()?.brand }}</p>
        </div>
      </div>
    }
  `,
  styles: [
    `
      :host {
        .card {
          display: flex;
          flex-direction: column;
          max-width: 320px;
          max-height: 300px;
          position: relative;
          gap: 1rem;
          &-info {
            position: absolute;
            top: 15px;
            padding: 0.5rem;
            background: #000000;
            color: #ffffff;
            right: -35px;
            border-radius: 5px;
            font-family: 'Work sans', sans-serif;
            font-weight: 700;
            font-size: 1rem;
          }
          &-image {
            width: 100%;
            height: 200px;
            background: #f6f6f6;
            padding: 1.5rem;
            &-item {
              width: 100%;
              height: 100%;
            }
            &-item {
              width: 100%;
              height: 100%;
            }
          }
          &-content {
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: start;
            width: 100%;
            &-title {
              margin: 0;
              font-size: 1.5rem;
            }
            &-price {
              margin: 0;
              font-size: 1.25rem;
            }
            &-brand {
              margin: 0;
              font-size: 1rem;
            }
          }
        }
      }
    `,
  ],
})
export default class CardComponent {
  product = input<ProductCard | undefined>();
}

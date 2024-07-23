import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-brand',
  standalone: true,
  template: `
    <img class="img" [src]="imgSrc()" [alt]="imgAlt()" />
    <p class="name-brand">{{ brandName() }}</p>
  `,
  styles: `
    :host {
      display: inline-flex;
      font-family: 'Work Sans', sans-serif;
      font-weight: 500;
      border: 1px solid #dddddd;
      border-radius: 5px;
      align-items: center;
      gap: 1.5rem;
      height: 40px;
      width: 210px;
      .img {
        width: 25%;
        height: 100%;
      }
      .name-brand {
        font-size: 1.2rem;
        font-weight: 700;
      }
    }
  `,
})
export default class CardBrandComponent {
  imgSrc = input('');
  imgAlt = input('');
  brandName = input('');
}

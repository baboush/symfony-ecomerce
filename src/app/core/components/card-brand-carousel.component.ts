import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-brand-carousel',
  standalone: true,
  template: `
    <img class="img" [src]="imgSrc()" [alt]="altImg()" />
    <p class="brand-name">{{ brandName() }}</p>
  `,
  styles: `
    :host {
      display: flex;
      height: 420px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      .img {
        width: 320px;
        height: 95%;
      }
      .brand-name {
        font-family: 'Work sans', sans-serif;
        font-size: 1.5rem;
        font-weight: 700;
      }
    }
  `,
})
export default class CardBrandCarouselComponent {
  brandName = input<string>('');
  imgSrc = input<string>('');
  altImg = input<string>('');
}

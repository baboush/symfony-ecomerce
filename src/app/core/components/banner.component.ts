import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  template: `
    <div class="banner">
      <h2 class="banner-title">Must Have.</h2>
      <p class="banner-subtitle">
        Que vous cherchiez un classique ou la dernière collab, votre bonheur se
        trouve ici.
      </p>
      <button class="banner-button">Découvrir</button>
    </div>
  `,
  styles: `
    :host {
      display: block;
      height: 750px;
      width: 100%;
      background-image: url('/Images/banner-home.webp');
      position: relative;
      background-repeat: no-repeat;
      background-size: cover;

      .banner {
        position: absolute;
        background-color: white;
        border-radius: 5px;
        transform: translateY(-50%);
        top: 50%;
        right: 2em;
        margin: auto;
        padding: 2rem;
        width: 25%;
      }
    }
  `,
})
export default class BannerComponent {}

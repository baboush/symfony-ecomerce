import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <div class="contact">
      <h2 class="contact-title">Nous contacter</h2>
      <span class="material-symbols-outlined contact-icon"> mail </span>
      <p class="contact-paragraphe">
        Portail de contact notre équipe s'engage à vous répondre en 24h à 48h
        ouvrées.
      </p>
    </div>
    @for (item of about; track item) {
      <div class="box">
        <h2>{{ item.title }}</h2>
        <p>{{ item.content }}</p>
      </div>
    }
    @for (item of more; track item) {
      <div class="box">
        <h2>{{ item.title }}</h2>
        <p>{{ item.concept }}</p>
        <p>{{ item.condition }}</p>
        <p>{{ item.galeries }}</p>
      </div>
    }
    @for (item of service; track item) {
      <div class="box">
        <h2>{{ item.title }}</h2>
        <p>{{ item.card }}</p>
        <p>{{ item.faq }}</p>
        <p>{{ item.programme }}</p>
        <p>{{ item.sell }}</p>
        <p>{{ item.send }}</p>
      </div>
    }
    @for (item of collection; track item) {
      <div class="box">
        <h2>{{ item.title }}</h2>
        <p>{{ item.woman }}</p>
        <p>{{ item.man }}</p>
        <p>{{ item.eco }}</p>
        <p>{{ item.price }}</p>
      </div>
      <div class="social-media">
        <h2 class="social-media-title">Retrouvez nous sur</h2>
        <div class="social-media-icon">
          <span class="material-symbols-outlined">
            <svg
              width="40"
              height="40"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.167 1.6665H5.83366C3.53247 1.6665 1.66699 3.53198 1.66699 5.83317V14.1665C1.66699 16.4677 3.53247 18.3332 5.83366 18.3332H14.167C16.4682 18.3332 18.3337 16.4677 18.3337 14.1665V5.83317C18.3337 3.53198 16.4682 1.6665 14.167 1.6665Z"
                stroke="#E6E6E6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.3337 9.47476C13.4366 10.1683 13.3181 10.8766 12.9952 11.4989C12.6723 12.1213 12.1614 12.6259 11.5351 12.9412C10.9088 13.2564 10.1991 13.3661 9.5069 13.2547C8.81468 13.1433 8.17521 12.8165 7.67944 12.3207C7.18367 11.825 6.85685 11.1855 6.74546 10.4933C6.63408 9.80106 6.74379 9.09134 7.05901 8.46507C7.37423 7.83881 7.8789 7.32788 8.50123 7.00496C9.12356 6.68205 9.83187 6.56359 10.5254 6.66643C11.2328 6.77133 11.8878 7.10098 12.3935 7.60669C12.8992 8.11239 13.2288 8.76733 13.3337 9.47476Z"
                stroke="#E6E6E6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.583 5.4165H14.5913"
                stroke="#E6E6E6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span class="material-symbols-outlined">
            <svg
              width="40"
              height="40"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8 2C13.08 5.34221 15.7167 6.06171 17 6.00368V8.44071C15.32 8.30145 13.7333 7.68639 13.15 7.39627V12.2703C13.15 15.1402 12.6074 16.4343 10.35 17.6288C8.96278 18.3629 3 18.537 3 12.9666C3 8.61478 6.67503 7.91849 8.425 7.91849V10.8777C6.15002 10.5296 4.92648 13.3234 6.75288 14.6673C8.19096 15.7255 10.35 14.5333 10.35 11.7481V2H12.8Z"
                stroke="#E6E6E6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span class="material-symbols-outlined">
            <svg
              width="40"
              height="40"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3337 3.33232C17.6082 3.84405 16.805 4.23544 15.9549 4.49142C15.4986 3.9668 14.8922 3.59497 14.2178 3.42621C13.5433 3.25745 12.8333 3.2999 12.1837 3.54782C11.5342 3.79574 10.9764 4.23717 10.5859 4.81241C10.1954 5.38765 9.99101 6.06894 10.0003 6.76414V7.52172C8.66899 7.55624 7.34978 7.26097 6.16018 6.66221C4.97059 6.06345 3.94754 5.17978 3.18214 4.0899C3.18214 4.0899 0.151843 10.9081 6.97002 13.9384C5.40982 14.9975 3.5512 15.5285 1.66699 15.4535C8.48517 19.2414 16.8185 15.4535 16.8185 6.74142C16.8178 6.5304 16.7975 6.3199 16.7579 6.11263C17.5311 5.35012 18.0767 4.38741 18.3337 3.33232Z"
                stroke="#E6E6E6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span class="material-symbols-outlined">
            <svg
              width="40"
              height="40"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6752 1.5H12.1252C10.998 1.5 9.91702 1.94777 9.11999 2.7448C8.32296 3.54183 7.8752 4.62283 7.8752 5.75V8.3H5.3252V11.7H7.8752V18.5H11.2752V11.7H13.8252L14.6752 8.3H11.2752V5.75C11.2752 5.52457 11.3647 5.30837 11.5242 5.14896C11.6836 4.98955 11.8998 4.9 12.1252 4.9H14.6752V1.5Z"
                stroke="#E6E6E6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span class="material-symbols-outlined">
            <svg
              width="40"
              height="40"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.10485 11.4284C4.11499 10.6348 2.4817 8.28555 3.86752 5.23793C5.25334 2.19032 8.79642 1.6665 10.3017 1.6665C12.2814 1.6665 15.7459 2.38081 16.2409 6.90461C16.6368 10.5237 14.8299 12.7539 13.0238 13.3332C10.7966 14.0475 6.83716 13.0951 8.07449 7.04001C8.36661 5.61051 9.63407 5.84805 9.63407 7.04001C9.63407 9.04746 7.26395 15.2893 6.09477 18.3332"
                stroke="#E6E6E6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    }
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      justify-content: center;
      position: absolute;
      color: white;
      background: #333333;
      padding: 1rem;

      .contact {
        display: grid;
        grid-template-columns: 2fr;
        grid-template-rows: 100px;
        grid-template-areas:
          'a a'
          'b c';
        align-items: start;
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        width: 20%;
        padding: 1rem;

        &-title {
          grid-area: a;
        }
        &-icon {
          grid-area: b;
          width: 100%;
          height: 100%;
          padding: auto;
          font-size: 3rem;
        }
        &-paragraphe {
          grid-area: c;
          padding: 0.5rem;
        }
      }
      .box {
        display: flex;
        padding: 1.5rem;
        width: 20%;
        flex-direction: column;
        align-items: start;
      }
      .social-media {
        padding: 1.5rem;
        &-icon {
          display: flex;
          justify-content: space-between;
          padding: 1rem;
          gap: 1rem;
        }
      }
    }
  `,
})
export default class FooterComponent {
  about = [
    {
      title: 'A propos',
      content:
        'Wethenew a pour mission de donner la possibilité à tous les amateurs, les passionnés et les curieux de sneakers et streetwear d’acheter les produits limités qui leur plaisent en toute confiance.',
    },
  ];
  more = [
    {
      title: 'En savoir plus',
      concept: `Notre concept`,
      condition: `Conditions de nos offres`,
      galeries: 'Wethenew Galleries lafayette',
    },
  ];

  service = [
    {
      title: 'Nos services',
      card: `E-carte cadeau`,
      faq: `FAQ`,
      programme: `Programme Wethenew family`,
      sell: `Vendez votre produit`,
      send: `Envoi et livraison`,
    },
  ];

  collection = [
    {
      title: 'Nos collections',
      woman: `Sneakers Femme`,
      man: `Sneakers Homme`,
      eco: `Snecker eco-responsable`,
      price: `Moin de 200€`,
    },
  ];
}

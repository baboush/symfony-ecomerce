import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="toolbar">
      <img class="toolbar-logo" alt="Analog Logo" src="/analog.svg" />
      <nav class="toolbar-nav">
        <ul class="toolbar-nav-list">
          <li class="toolbar-nav-list-item"><a routerLink="/">Sneakers</a></li>
          <li class="toolbar-nav-list-item">
            <a routerLink="/">Chaussures</a>
          </li>
          <li class="toolbar-nav-list-item">
            <a routerLink="/">Livraison 48h</a>
          </li>
        </ul>
        <div class="toolbar-nav-search">
          <input
            class="toolbar-nav-search-input"
            type="search"
            placeholder="Rechercher une marquem un modèle..."
          />
          <span class="material-symbols-outlined icon"> search </span>
        </div>
        <div class="toolbar-nav-icon">
          <span class="material-symbols-outlined icon"> account_circle </span>
          <span class="material-symbols-outlined icon"> favorite </span>
          <span class="material-symbols-outlined icon"> shopping_cart </span>
          <span class="material-symbols-outlined icon"> menu </span>
        </div>
      </nav>
    </header>
  `,
  styles: [
    `
      :host {
        .toolbar {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: center;
          padding: 2rem;
          &-logo {
            width: 100px;
            height: 100px;
          }
          &-nav {
            display: inherit;
            flex-direction: inherit;
            align-items: inherit;
            width: 100%;
            justify-content: space-evenly;
            &-list {
              display: flex;
              flex-direction: row;
              flex-wrap: nowrap;
              list-style: none;
              &-item {
                list-style: none;
                margin: 0 1rem;
                a {
                  text-decoration: none;
                }
              }
            }
            &-search {
              padding: 0.5rem;
              display: flex;
              flex-direction: row;
              align-items: center;
              border: 1px solid #dddddd;
              padding: 0.5rem;
              border-radius: 5px;
              width: 40%;
              &-input {
                width: 100%;
                border: none;
                padding: 0.5rem;
                color: #a8a8a8;
              }
            }
            &-icon {
              display: flex;
              flex-direction: row;
              align-items: center;
              width: max-content;
              gap: 1rem;
              padding: 0.5rem;
              & > * {
                cursor: pointer;
              }
            }
          }
        }
        .icon {
          color: #a8a8a8;
        }
      }
    `,
  ],
})
export default class HeaderComponent {}

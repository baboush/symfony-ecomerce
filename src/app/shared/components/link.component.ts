import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'nav-link',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a class="router-link" routerLink="{{ url() }}">{{ name() }}</a>
  `,
  styles: `
    .router-link {
      font-size: 1.8rem;
      font-weight: 500;
      font-family: 'Inter', sans-serif;
      text-decoration: none;
      padding: 0.8rem;
    }
    .router-link:hover {
      color: lightblue;
    }
  `,
})
export default class LinkComponent {
  url = input.required<string>();
  name = input.required<string>();
}

import { Component, input } from '@angular/core';

@Component({
  selector: 'item-list-icon',
  standalone: true,
  template: `
    <li class="list-group-item">
      <span class="material-symbols-rounded icon">{{ icon() }}</span>
      <ng-content></ng-content>
    </li>
  `,
  styles: `
    :host {
      display: flex;
      align-items: start;
      justify-content: space-between;
      padding: 0.5rem;

      li {
        list-style: none;
        height: 4rem;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: start;
        align-items: center;
        width: 100%;

        .icon {
          font-size: 2.2rem;
          width: 8rem;
        }
      }
    }
  `,
})
export default class ItemListIconComponent {
  icon = input.required<string>();
}

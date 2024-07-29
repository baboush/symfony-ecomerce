import { Component } from '@angular/core';
import ItemListIconComponent from '../../../shared/components/item-list-icon.component';
import { LinkComponent } from '@app/shared/components';

@Component({
  selector: 'admin-menu',
  standalone: true,
  template: `
    <ul class="admin-menu">
      @for (item of naveItems; track item) {
        <item-list-icon [icon]="item.icon">
          <nav-link [url]="item.url" [name]="item.name" />
        </item-list-icon>
      }
    </ul>
  `,
  imports: [ItemListIconComponent, LinkComponent],
  styles: `
    .admin-menu {
      max-width: 15%;
      height: 100vh;
      padding: 1.2rem;
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
  `,
})
export default class MenuAdminComponent {
  naveItems = [
    { icon: 'account_circle', url: '/admin', name: 'Profile' },
    { icon: 'branding_watermark', url: '/admin/brand', name: 'Brands' },
    { icon: 'style', url: '/admin/gender', name: 'Gender' },
    { icon: 'model', url: '/admin/model', name: 'Models' },
    { icon: 'euro_symbol', url: '/admin/tax', name: 'Tax' },
  ];
}

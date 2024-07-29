import { Component } from '@angular/core';
import { ItemListIconComponent, LinkComponent } from '@app/shared/components';
import MenuAdminComponent from '../../features/admin/components/menu-admin.component';
import { AuthAdminGuard } from '@app/core/guards';
import { RouteMeta } from '@analogjs/router';

export const routeMeta: RouteMeta = {
  canActivate: [AuthAdminGuard],
};

@Component({
  standalone: true,
  imports: [LinkComponent, ItemListIconComponent, MenuAdminComponent],
  template: ` <admin-menu /> `,
})
export default class HomeAdminComponent {}

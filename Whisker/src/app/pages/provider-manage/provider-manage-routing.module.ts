import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProviderManagePage } from './provider-manage.page';

const routes: Routes = [
  {
    path: '',
    component: ProviderManagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProviderManagePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmProviderApplicationPage } from './confirm-provider-application.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmProviderApplicationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmProviderApplicationPageRoutingModule {}

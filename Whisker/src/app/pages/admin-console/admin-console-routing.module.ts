import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminConsolePage } from './admin-console.page';

const routes: Routes = [
  {
    path: '',
    component: AdminConsolePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminConsolePageRoutingModule {}

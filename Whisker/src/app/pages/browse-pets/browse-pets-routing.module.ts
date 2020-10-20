import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowsePetsPage } from './browse-pets.page';

const routes: Routes = [
  {
    path: '',
    component: BrowsePetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowsePetsPageRoutingModule {}

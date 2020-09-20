import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionExpiredPage } from './session-expired.page';

const routes: Routes = [
  {
    path: '',
    component: SessionExpiredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionExpiredPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdoptionSurveyPage } from './adoption-survey.page';

const routes: Routes = [
  {
    path: '',
    component: AdoptionSurveyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdoptionSurveyPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdoptionSurveyPageRoutingModule } from './adoption-survey-routing.module';

import { AdoptionSurveyPage } from './adoption-survey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AdoptionSurveyPageRoutingModule
  ],
  declarations: [AdoptionSurveyPage]
})
export class AdoptionSurveyPageModule {}

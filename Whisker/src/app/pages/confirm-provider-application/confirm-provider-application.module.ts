import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmProviderApplicationPageRoutingModule } from './confirm-provider-application-routing.module';

import { ConfirmProviderApplicationPage } from './confirm-provider-application.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmProviderApplicationPageRoutingModule
  ],
  declarations: [ConfirmProviderApplicationPage]
})
export class ConfirmProviderApplicationPageModule {}

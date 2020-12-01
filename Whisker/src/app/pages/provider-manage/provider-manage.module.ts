import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProviderManagePageRoutingModule } from './provider-manage-routing.module';

import { ProviderManagePage } from './provider-manage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProviderManagePageRoutingModule
  ],
  declarations: [ProviderManagePage]
})
export class ProviderManagePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowsePetsPageRoutingModule } from './browse-pets-routing.module';

import { BrowsePetsPage } from './browse-pets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowsePetsPageRoutingModule
  ],
  declarations: [BrowsePetsPage]
})
export class BrowsePetsPageModule {}

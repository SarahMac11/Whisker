import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminConsolePageRoutingModule } from './admin-console-routing.module';

import { AdminConsolePage } from './admin-console.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminConsolePageRoutingModule
  ],
  declarations: [AdminConsolePage]
})
export class AdminConsolePageModule {}

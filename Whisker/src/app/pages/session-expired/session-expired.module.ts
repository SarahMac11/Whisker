import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SessionExpiredPageRoutingModule } from './session-expired-routing.module';

import { SessionExpiredPage } from './session-expired.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SessionExpiredPageRoutingModule
  ],
  declarations: [SessionExpiredPage]
})
export class SessionExpiredPageModule {}

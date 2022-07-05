import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppelsPageRoutingModule } from './appels-routing.module';

import { AppelsPage } from './appels.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppelsPageRoutingModule
  ],
  declarations: [AppelsPage]
})
export class AppelsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatutPageRoutingModule } from './statut-routing.module';

import { StatutPage } from './statut.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatutPageRoutingModule
  ],
  declarations: [StatutPage]
})
export class StatutPageModule {}

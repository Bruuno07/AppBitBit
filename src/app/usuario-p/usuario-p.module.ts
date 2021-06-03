import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioPPageRoutingModule } from './usuario-p-routing.module';

import { UsuarioPPage } from './usuario-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioPPageRoutingModule
  ],
  declarations: [UsuarioPPage]
})
export class UsuarioPPageModule {}

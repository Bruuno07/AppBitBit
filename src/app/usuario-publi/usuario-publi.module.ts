import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioPubliPageRoutingModule } from './usuario-publi-routing.module';

import { UsuarioPubliPage } from './usuario-publi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioPubliPageRoutingModule
  ],
  declarations: [UsuarioPubliPage]
})
export class UsuarioPubliPageModule {}

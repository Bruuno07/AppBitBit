import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioPubliPage } from './usuario-publi.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioPubliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioPubliPageRoutingModule {}

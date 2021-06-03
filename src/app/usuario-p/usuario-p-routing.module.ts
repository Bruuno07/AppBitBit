import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioPPage } from './usuario-p.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioPPageRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotacoesComponent } from './cotacoes/cotacoes.component';

const routes: Routes = [
  { path: '', component: CotacoesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CotacoesRoutingModule { }

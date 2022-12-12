import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CotacoesRoutingModule } from './cotacoes-routing.module';
import { CotacoesComponent } from './cotacoes/cotacoes.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module'



@NgModule({
  declarations: [
    CotacoesComponent
  ],
  imports: [
    CommonModule,
    CotacoesRoutingModule,
    AppMaterialModule
  ]
})
export class CotacoesModule { }

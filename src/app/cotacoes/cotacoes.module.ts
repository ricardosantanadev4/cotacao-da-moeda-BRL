import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CotacoesRoutingModule } from './cotacoes-routing.module';
import { CotacoesComponent } from './cotacoes/cotacoes.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module'
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CotacoesComponent
  ],
  imports: [
    CommonModule,
    CotacoesRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class CotacoesModule { }

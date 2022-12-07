import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CotacoesRoutingModule } from './cotacoes-routing.module';
import { CotacoesComponent } from './cotacoes/cotacoes.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    CotacoesComponent
  ],
  imports: [
    CommonModule,
    CotacoesRoutingModule,
    MatTableModule,
    MatCardModule
  ]
})
export class CotacoesModule { }

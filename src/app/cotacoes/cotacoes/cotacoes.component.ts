import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CotacoesService } from '../cotacoes-service/cotacoes.service';
import { Cotacoes } from '../model/cotacoes';

@Component({
  selector: 'app-cotacoes',
  templateUrl: './cotacoes.component.html',
  styleUrls: ['./cotacoes.component.scss']
})
export class CotacoesComponent {

  cotacoes: Cotacoes[] = [];
  displayedColumns = ['cotacaoCompra', 'cotacaoVenda', 'dataHoraCotacao']

  constructor(cotacoesService: CotacoesService) {
    cotacoesService.getCotacoes().subscribe(cotacoes => this.cotacoes = cotacoes);
  }
}

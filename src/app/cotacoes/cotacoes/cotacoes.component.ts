import { Component } from '@angular/core';
import { Cotacoes } from '../model/cotacoes';

@Component({
  selector: 'app-cotacoes',
  templateUrl: './cotacoes.component.html',
  styleUrls: ['./cotacoes.component.scss']
})
export class CotacoesComponent {

  cotacoes: Cotacoes[] = [{ "cotacaoCompra": 5.50840, "cotacaoVenda": 5.51120, "dataHoraCotacao": "2022-07-06 10:06:15.609" }];
  displayedColumns = ['cotacaoCompra', 'cotacaoVenda', 'dataHoraCotacao']
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cotacoes } from '../model/cotacoes';

@Injectable({
  providedIn: 'root'
})
export class CotacoesService {

  cotacoes: Cotacoes[] = [{ "cotacaoCompra": 5.50840, "cotacaoVenda": 5.51120, "dataHoraCotacao": "2022-07-06 10:06:15.609" }]
  constructor(private httpClient: HttpClient) {
  }
  getCotacoes() {
    return this.cotacoes
  }
}

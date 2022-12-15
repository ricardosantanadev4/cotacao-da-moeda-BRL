import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { CotacoesService } from '../cotacoes-service/cotacoes.service';
import { Cotacoes } from '../model/cotacoes';

@Component({
  selector: 'app-cotacoes',
  templateUrl: './cotacoes.component.html',
  styleUrls: ['./cotacoes.component.scss']
})
export class CotacoesComponent {

  cotacoes$: Observable<Cotacoes[]>;
  displayedColumns = ['cotacaoCompra', 'cotacaoVenda', 'dataHoraCotacao']

  constructor(cotacoesService: CotacoesService, public dialog: MatDialog) {
    this.cotacoes$ = cotacoesService.getCotacoes().pipe(
      catchError(error => {
        this.onError('Erro ao carregar cotações.')
        return of([])
      })
    );
  }

  onError(erroMsg: string) {
    this.dialog.open(ErrorDialogComponent, { data: erroMsg });
  }
}
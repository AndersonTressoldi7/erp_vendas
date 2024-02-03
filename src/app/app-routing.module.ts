import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrosComponent } from './pages/cadastros/cadastros.component';
import { PdvComponentComponent } from './pages/pdv-component/pdv-component.component';
import { FinanceiroComponent } from './pages/financeiro/financeiro.component';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';
import { ListagemProdutosComponent } from './pages/listagem-produtos/listagem-produtos.component';
import { FinalizaVendaComponent } from './pages/pdv-component/finaliza-venda/finaliza-venda.component';

const routes: Routes = [
  { path: '', component: PdvComponentComponent},
  { path: 'CadastrosComponent', component: CadastrosComponent },
  { path: 'pdv', component: PdvComponentComponent},
  { path: 'financeiro', component: FinanceiroComponent},
  { path: 'relatorios', component: RelatoriosComponent},
  { path: 'listaProdutos', component: ListagemProdutosComponent},
  { path: 'finalizaVendaPdv', component: FinalizaVendaComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

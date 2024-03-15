import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './templates/navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { PdvComponentComponent } from './pages/pdv-component/pdv-component.component';
import { FormsModule } from '@angular/forms';
import { CadastrosComponent } from './pages/cadastros/cadastros.component';
import { FinanceiroComponent } from './pages/financeiro/financeiro.component';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { ProdutosComponent } from './pages/cadastros/produtos/produtos.component';
import { DialogAvisoComponent } from './templates/dialog-aviso/dialog-aviso.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListagemProdutosComponent } from './pages/listagem-produtos/listagem-produtos.component';
import { TituloComponent } from './templates/titulo/titulo.component';
import { FinalizaVendaComponent } from './pages/pdv-component/finaliza-venda/finaliza-venda.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DialogPerguntaComponent } from './templates/dialog-pergunta/dialog-pergunta.component';
import { DescontoAcrescimoComponent } from './templates/desconto-acrescimo/desconto-acrescimo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PessoasComponent } from './pages/cadastros/pessoas/pessoas.component';
import { ListagemPessoasComponent } from './pages/listagem-pessoas/listagem-pessoas.component';
import { DialogGeraParcelasCrediarioComponent } from './pages/pdv-component/finaliza-venda/dialog-gera-parcelas-crediario/dialog-gera-parcelas-crediario.component';
import { MatSelectModule} from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SelecionaProdutosListagemComponent } from './pages/pdv-component/seleciona-produtos-listagem/seleciona-produtos-listagem.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    PdvComponentComponent,
    CadastrosComponent,
    FinanceiroComponent,
    RelatoriosComponent,
    ProdutosComponent,
    DialogAvisoComponent,
    ListagemProdutosComponent,
    TituloComponent,
    FinalizaVendaComponent,
    DialogPerguntaComponent,
    DescontoAcrescimoComponent,
    PessoasComponent,
    ListagemPessoasComponent,
    DialogGeraParcelasCrediarioComponent,
    SelecionaProdutosListagemComponent,
  ],
  imports: [
    MatProgressSpinnerModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgbModule,
    MatSelectModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

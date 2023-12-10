import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './templates/navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { PdvComponentComponent } from './pages/pdv-component/pdv-component.component';
import { FormsModule } from '@angular/forms';
import { CadastrosComponent } from './pages/cadastros/cadastros.component';
import { FinanceiroComponent } from './pages/financeiro/financeiro.component';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    PdvComponentComponent,
    CadastrosComponent,
    FinanceiroComponent,
    RelatoriosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

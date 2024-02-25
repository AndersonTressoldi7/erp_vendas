import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Pessoa } from 'src/app/models/pessoa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  urlBase: string = 'http://localhost:8000';

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  buscarTodasPessoas(){
  return this.http.get<Pessoa[]>(`${this.urlBase}/pessoas`);
  }

  buscarPessoasFiltro(filtro: string, checkboxSelecionado: string): Observable<any[]>{
    const url = `${this.urlBase}/pessoas/filtrarPessoa/?filtros=${filtro}&checkboxTipoFiltro=${checkboxSelecionado}`;
    return this.http.get<any[]>(url);
  }
}

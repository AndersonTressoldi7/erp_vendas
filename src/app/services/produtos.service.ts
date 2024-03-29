import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../models/produtos.model';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

   urlBase: string = 'http://localhost:8000';

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  getProdutos(){
  return this.http.get<Produto[]>(`${this.urlBase}/produtos`);
  }

  buscarProdutoPeloCodigo(codigo: string){
    return this.http.get<Produto>(`${this.urlBase}/produtos/${codigo}`);
  }

  salvarProduto(novoProduto: Produto) {
    const data = { produto: novoProduto };
  
    return this.http.post<Produto>(`${this.urlBase}/produtos/cadastrarProduto`, data);
  }

  editarProduto(produtoEditado: Produto){
    const data = { produto: produtoEditado };
    return this.http.put<Produto>(`${this.urlBase}/produtos/cadastrarProduto`, data);
  }
  
  buscarProdutosFiltro(filtro: string, checkboxSelecionado: string): Observable<any[]>{
    const url = `${this.urlBase}/produtos/filtrarProduto/?filtros=${filtro}&checkboxTipoFiltro=${checkboxSelecionado}`;
    return this.http.get<any[]>(url);
  }
  
  
}

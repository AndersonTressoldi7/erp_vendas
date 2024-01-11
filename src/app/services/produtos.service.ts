import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../models/produtos.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

   urlBase: string = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  getProdutos(){
  return this.http.get<Produto[]>(`${this.urlBase}/produtos`);
  }

  buscarProdutoPeloCodigo(codigo: string){
    return this.http.get<Produto>(`${this.urlBase}/produtos/${codigo}`);
  }

  salvarProduto(novoProduto: Produto){
    console.log('Esse é o novo produto: ', novoProduto);
    const CadastroConfirmado = this.http.post<Produto>(`${this.urlBase}/produtos/`, novoProduto);
    console.log(' cadastro:', CadastroConfirmado);
  }
}
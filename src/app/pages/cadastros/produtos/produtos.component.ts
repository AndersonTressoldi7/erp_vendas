import { Component } from '@angular/core';
import { Produto } from 'src/app/models/produtos.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent {

  public produtoSvc: ProdutosService;
  public produto: Produto = {} as Produto;

  constructor(produtoSvc: ProdutosService){
    this.produtoSvc = produtoSvc;
  }
 
  salvarProduto(produto: Produto){
    this.produtoSvc.salvarProduto(produto);
  }
}

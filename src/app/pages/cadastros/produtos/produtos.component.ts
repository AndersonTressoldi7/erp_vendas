import { Component } from '@angular/core';
import { Produto } from 'src/app/models/produtos.model';
import { ProdutosService } from 'src/app/services/produtos.service';
import { utils } from 'src/app/utils';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent {

  public produtoSvc: ProdutosService;
  public produto: Produto = {} as Produto;
  public mensagemProduto: string | null = null;
  public sucessoCadastro: boolean = false;

  constructor(produtoSvc: ProdutosService){
    this.produtoSvc = produtoSvc;
  }
 
  salvarProduto(produto: Produto) {
    this.produtoSvc.salvarProduto(produto).subscribe(
      () => {
        this.mensagemProduto = "Produto cadastrado com sucesso",
        this.sucessoCadastro = true;
      },
      error => {
        this.mensagemProduto = error.error.message,
      this.sucessoCadastro = false;
    }
      
    );
  }
  
  
}

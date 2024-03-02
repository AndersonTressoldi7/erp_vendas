import { Component, Inject, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produtos.model';
import { ProdutosService } from 'src/app/services/produtos.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit{

  public produtoSvc: ProdutosService;
  public produto: Produto = {} as Produto;
  public mensagemProduto: string | null = null;
  public sucessoCadastro: boolean = false;
  public dadosPreechidosCorretamente: boolean = true;
  public produtoEditando: boolean = false;

  constructor(produtoSvc: ProdutosService, @Inject(MAT_DIALOG_DATA) public data: any){
    this.produtoSvc = produtoSvc;
  }

  ngOnInit(): void {   
    if(this.data){
       this.produtoEditando = true;
       this.produto = this.data;
       console.log(this.produto);
    }
  }


  validarDadosProdutos(produto: Produto){
    this.dadosPreechidosCorretamente = true;
    this.mensagemProduto = null;

    if(!produto.nome || !produto.codigo || !produto.preco)
      this.dadosPreechidosCorretamente = false;
  }
 
  salvarProduto(produto: Produto) {
    
    this.validarDadosProdutos(produto);

    if(this.dadosPreechidosCorretamente ){
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

  editarProduto(produto: Produto){
    this.validarDadosProdutos(produto);
  
    if(this.dadosPreechidosCorretamente ){
      this.produtoSvc.editarProduto(produto).subscribe(
        () => {
          this.mensagemProduto = "Produto alterado com sucesso",
          this.sucessoCadastro = true;
        },
        error => {
        this.mensagemProduto = error.error.message,
        this.sucessoCadastro = false;
      } 
      );
    }
    }
  
}

import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produtos.model';
import { ProdutosService } from 'src/app/services/produtos.service';
import { ProdutosComponent } from '../cadastros/produtos/produtos.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-listagem-produtos',
  templateUrl: './listagem-produtos.component.html',
  styleUrls: ['./listagem-produtos.component.scss']
})
export class ListagemProdutosComponent implements OnInit{

  descricaoCheckbox: boolean = false;
  codigoCheckbox: boolean = false;
  produtos: Array<Produto> = [];
  public produtoSvc: ProdutosService;
  filtro: string = '';



  constructor(produtoSvc: ProdutosService, private dialog: MatDialog){
    this.produtoSvc = produtoSvc;
  }

  abrirDialogCadastroProdutos(produto?: Produto) {
    const dialogRef = this.dialog.open(ProdutosComponent, {
      width: '900px', 
      height: '400px',
      data: produto ? produto : null
    });

    dialogRef.afterClosed().subscribe(() => {
      this.buscarProdutos();
      }
    );

  }

  ngOnInit(): void {
    this.descricaoCheckbox = true;
    this.buscarProdutos();
    
  }

  buscarProdutos(){
    this.produtoSvc.getProdutos().subscribe(
      (data: any[]) => {
        this.produtos = data;
      },
      error => {
        console.error('Erro ao buscar produtos:', error);
      }
    );
  }

  buscarProdutosPeloFiltro(filtro: string){

    const checkboxSelecionado = this.codigoCheckbox ? 'codigo' : this.descricaoCheckbox ? 'descricao' : '';
    
    this.produtoSvc.buscarProdutosFiltro(filtro, checkboxSelecionado).subscribe(
      (data: any[]) => {
        this.produtos = data;
      },
      error => {
        console.error('Erro ao buscar produtos:', error);
      }
    );
  }

  onCodigoCheckboxChange() {
    if (this.codigoCheckbox) {
      this.descricaoCheckbox = false;
    }
  }

  onDescricaoCheckboxChange(): void {
    if (this.descricaoCheckbox) {
      this.codigoCheckbox = false;
    }
  }

  abrirDialogProdutos(produto: Produto){
    console.log('teste', produto);
  }
}

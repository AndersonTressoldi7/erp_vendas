import { Component, HostListener, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produtos.model';
import { ProdutosService } from 'src/app/services/produtos.service';


@Component({
  selector: 'app-pdv-component',
  templateUrl: './pdv-component.component.html',
  styleUrls: ['./pdv-component.component.scss']
})
export class PdvComponentComponent implements OnInit{

  codigoProduto: string = "";
  produtos: Array<Produto> = [];
  produtosTotal: number = 0;

  public produtoSvc: ProdutosService;



  constructor(produtoSvc: ProdutosService){
    this.produtoSvc = produtoSvc;
  }


  public telaPequena: boolean = false;

  adicionarProduto(codigoProduto: string){
    this.produtoSvc.buscarProdutoPeloCodigo(codigoProduto).subscribe(
      (produto: Produto) => {
      this.produtos.push(produto);
      this.produtosTotal += Number(produto.preco);
      },
      (error) => {
        window.alert('Código não encontrado!')
      }
    );
    this.codigoProduto = "";
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.atualizarTamanhoDaTela();
  }


  atualizarTamanhoDaTela() {
    this.telaPequena = window.innerWidth <= 700;
  }

  ngOnInit() {
    this.atualizarTamanhoDaTela();
    this.produtoSvc.getProdutos().subscribe(
      (data: any[]) => {
        console.log(data); 
      },
      error => {
        console.error('Erro ao buscar produtos:', error);
      }
    );
  }
}

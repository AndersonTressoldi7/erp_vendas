import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produtos.model';
import { ProdutosService } from 'src/app/services/produtos.service';
import { ViewChild } from '@angular/core';
import { utils } from 'src/app/utils';
import { MatDialog } from "@angular/material/dialog";
import { Router } from '@angular/router';


@Component({
  selector: 'app-pdv-component',
  templateUrl: './pdv-component.component.html',
  styleUrls: ['./pdv-component.component.scss']
})
export class PdvComponentComponent implements OnInit{

  @ViewChild('campoCodigo', { static: true }) campoCodigo!: ElementRef;


  codigoProduto: string = "";
  produtos: Array<Produto> = [];
  produtosTotal: number = 0;
  quantidadeProduto: number = 1;

  

  public produtoSvc: ProdutosService;



  constructor(produtoSvc: ProdutosService, private dialog: MatDialog, private router: Router){
    this.produtoSvc = produtoSvc;
  }


  public telaPequena: boolean = false;

  adicionarProduto(codigoProduto: string){

    if(codigoProduto && this.quantidadeProduto){
      this.produtoSvc.buscarProdutoPeloCodigo(codigoProduto).subscribe(
        (produto: Produto) => {
          const novoProduto: Produto = {
            id: produto.id,
            codigo: produto.codigo,
            nome: produto.nome,
            quantidade: this.quantidadeProduto,
            preco: produto.preco
          };

        this.produtos.push(novoProduto);
        this.produtosTotal += Number(produto.preco) * this.quantidadeProduto;

        localStorage.setItem('produtos', JSON.stringify(this.produtos));
      },
      (error) => {
        utils.exibirAviso(this.dialog, "Produto não encontrado!");
        
      }
    );
    this.codigoProduto = "";
    }else{
      window.alert("Verifique os dados!");
    }
  }

  finalizarVendaPdv() {
    if(this.produtos.length){
    this.router.navigate(['/finalizaVendaPdv'], {
      queryParams: {
        produtos: JSON.stringify(this.produtos)
      }
    });
  }else{
    utils.exibirAviso(this.dialog, "Adicione Produtos a venda!");
  }
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

  ngAfterViewInit() {
    setTimeout(() => {
      this.campoCodigo.nativeElement.focus();
    }, 1000);
  }
  
  
}


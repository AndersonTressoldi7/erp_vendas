import { Component, OnInit } from '@angular/core';
import { VendasService } from 'src/app/services/vendas/vendas.service';
import { Venda } from 'src/app/models/venda.model';
import { Produto } from 'src/app/models/produtos.model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MatProgressSpinner } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-finaliza-venda',
  templateUrl: './finaliza-venda.component.html',
  styleUrls: ['./finaliza-venda.component.scss']
})
export class FinalizaVendaComponent implements OnInit {
  htmlDav: string = ''; 
  produtos: Produto[] = [];
  public totalProdutos: number = 0;
  public formaPagamento: number = 1;
  isLoading: boolean = false;

  formasPagamento: FormaPagamento[] = [
    { id: 1, nome: 'Dinheiro' },
    { id: 2, nome: 'Cartão' },
    { id: 3, nome: 'Vale alimentação' },
    { id: 4, nome: 'Vale presente' },
    { id: 5, nome: 'Cheque' },
    { id: 6, nome: 'Boleto' },
    { id: 7, nome: 'Pix' },
    { id: 8, nome: 'Depósito Bancário' },
    { id: 9, nome: 'Crediário' }
  ];

  constructor(private vendasService: VendasService, private route: ActivatedRoute, private routerNav: Router) {}
  

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      if (params['produtos']) {
        this.produtos = JSON.parse(params['produtos']);
        console.log(this.produtos);
      }
    });

    this.totalProdutos = this.produtos.reduce((total, produto) =>
      total + (produto.preco * (produto.quantidade ?? 1)), 0);
  }

  finalizarVenda(formaPagamento: number) {
    this.isLoading = true;

    const novaVenda: Venda = {
      produtos: this.produtos,
      valor: this.totalProdutos,
      forma_pagamento: formaPagamento
    };

    

    this.vendasService.salvarVenda(novaVenda).subscribe(
      (response: any) => {     
        if(response){

          const pdfData = response.body.pdf;
          const decodedData = new Uint8Array(atob(pdfData).split('').map(char => char.charCodeAt(0)));
          const blob = new Blob([decodedData], { type: 'application/pdf' });
          
          const url = URL.createObjectURL(blob);
          window.open(url, '_blank');
          this.routerNav.navigate(['/pdv']);
        }
      },
      (error) => {
        this.isLoading = false;
        console.error('Erro ao obter o HTML da venda:', error);
      },

    () => {
      this.isLoading = false; 
    }

    );
  }
}

export interface FormaPagamento {
  id: number;
  nome: string;
}

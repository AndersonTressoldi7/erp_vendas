import { Component, OnInit } from '@angular/core';
import { VendasService } from 'src/app/services/vendas/vendas.service';
import { Venda } from 'src/app/models/venda.model';
import { Produto } from 'src/app/models/produtos.model';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-finaliza-venda',
  templateUrl: './finaliza-venda.component.html',
  styleUrls: ['./finaliza-venda.component.scss']
})
export class FinalizaVendaComponent implements OnInit {
  produtos: Produto[] = [];
  public totalProdutos: number = 0;
  public formaPagamento: number = 1;

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

  constructor(private vendasService: VendasService, private route: ActivatedRoute) {}

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
    const novaVenda: Venda = {
      produtos: this.produtos,
      valor: this.totalProdutos,
      forma_pagamento: formaPagamento
    };

    console.log(novaVenda);

    this.vendasService.salvarVenda(novaVenda);
    // .subscribe(
    //   (response: any) => {
    //     const htmlContent = response['html'];

    //     console.log(htmlContent);

    //     // Converter HTML para PDF usando pdfmake
    //     const pdfDefinition = { content: [{ text: htmlContent, fontSize: 12 }] };

    //     pdfMake.createPdf(pdfDefinition).open();
    //   },
    //   error => {
    //     console.error('Erro ao receber o HTML:', error);
    //   }
    // );
  }
}

export interface FormaPagamento {
  id: number;
  nome: string;
}

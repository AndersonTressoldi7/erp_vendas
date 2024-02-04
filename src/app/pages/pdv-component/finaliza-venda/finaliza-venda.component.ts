import { Component, OnInit } from '@angular/core';
import { VendasService } from 'src/app/services/vendas/vendas.service';
import { Venda } from 'src/app/models/venda.model';
import { Produto } from 'src/app/models/produtos.model';
import { ActivatedRoute } from '@angular/router';
import jspdf, { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

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



    this.vendasService.salvarVenda(novaVenda).subscribe(
      (response: any) => {
        if (response.body.htmlDav) {
       
          this.htmlDav = response.body.htmlDav;

          const tempContainer = document.createElement('div');
          tempContainer.innerHTML = this.htmlDav;
          document.body.appendChild(tempContainer);

          html2canvas(tempContainer).then((canvas) => {
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgData = canvas.toDataURL('image/png');


            const imgWidth = 190; // Largura da imagem
            const imgHeight = (canvas.height * imgWidth) / canvas.width; // Mantenha a proporção

            // Adicione a imagem do canvas ao PDF
            pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);

            const pdfBlob = pdf.output('blob');
            const pdfUrl = URL.createObjectURL(pdfBlob);
            window.open(pdfUrl, '_blank');
            tempContainer.remove();
          });
        }
      },
      (error) => {
        console.error('Erro ao obter o HTML da venda:', error);
      }
    );
  }
}

export interface FormaPagamento {
  id: number;
  nome: string;
}

import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoasService } from 'src/app/services/pessoas/pessoas.service';

@Component({
  selector: 'app-listagem-pessoas',
  templateUrl: './listagem-pessoas.component.html',
  styleUrls: ['./listagem-pessoas.component.scss']
})
export class ListagemPessoasComponent implements OnInit{

  pessoasSvc: PessoasService;
  pessoas: Array<Pessoa> = [];
  filtro: string = '';

  constructor(pessoasSvc: PessoasService){
    this.pessoasSvc = pessoasSvc;
  }

  ngOnInit(): void {
    this.buscarPessoas();
  }

  buscarPessoas(){
    this.pessoasSvc.buscarTodasPessoas().subscribe(
      (data: any[]) => {
        this.pessoas = data;
      },
      error => {
        console.error('Erro ao buscar produtos:', error);
      }
    );
  }

  buscarPessoasPeloFiltro(filtro: string){

    console.log('O filtro dentro da função ', filtro);

    const checkboxSelecionado = 'nome';
    
    this.pessoasSvc.buscarPessoasFiltro(filtro, checkboxSelecionado).subscribe(
      (data: any[]) => {
        this.pessoas = data;
      },
      error => {
        console.error('Erro ao buscar produtos:', error);
      }
    );
  }

}

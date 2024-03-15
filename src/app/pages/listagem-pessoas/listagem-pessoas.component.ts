import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Pessoa } from 'src/app/models/pessoa';
import { PessoasService } from 'src/app/services/pessoas/pessoas.service';
import { Observable, map, startWith } from 'rxjs';



@Component({
  selector: 'app-listagem-pessoas',
  templateUrl: './listagem-pessoas.component.html',
  styleUrls: ['./listagem-pessoas.component.scss']
})
export class ListagemPessoasComponent implements OnInit{

  pessoasSvc: PessoasService;
  pessoas: Array<Pessoa> = [];
  filtro: string = '';
  pessoasControl = new FormControl();
  filteredPessoas: Observable<Pessoa[]>;


  constructor(pessoasSvc: PessoasService){
    this.pessoasSvc = pessoasSvc;
    this.filteredPessoas = this.pessoasControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filterPessoas(value))
    );
}

private _filterPessoas(value: string | Pessoa): Pessoa[] {
  const filterValue = typeof value === 'string' ? value.toLowerCase() : value.nome.toLowerCase();
  return this.pessoas.filter(pessoa => pessoa.nome.toLowerCase().includes(filterValue));
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

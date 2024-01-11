import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProdutosComponent } from './produtos/produtos.component';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.scss']
})
export class CadastrosComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  abrirDialogCadastroProdutos() {
    const dialogRef = this.dialog.open(ProdutosComponent, {
      width: '900px', 
      height: '900px'
    });
  }
}

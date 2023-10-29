import { Component } from '@angular/core';

@Component({
  selector: 'app-pdv-component',
  templateUrl: './pdv-component.component.html',
  styleUrls: ['./pdv-component.component.scss']
})
export class PdvComponentComponent {

  produto: string = "";
  produtos: Array<string> = [
 
  ];

  adicionarProduto(){
    this.produtos.push(this.produto);
    this.produto = "";
  }

   testarBotoes(){
    if(this.produtos.length == 0){
      alert('Você precisa adicionar produtos!!');
    }else{
      console.log('tem produtos');
    }
  }
}

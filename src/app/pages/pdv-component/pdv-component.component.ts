import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-pdv-component',
  templateUrl: './pdv-component.component.html',
  styleUrls: ['./pdv-component.component.scss']
})
export class PdvComponentComponent implements OnInit{

  produto: string = "";
  produtos: Array<string> = [
 
  ];


  public telaPequena: boolean = false;

  adicionarProduto(){
    this.produtos.push(this.produto);
    this.produto = "";
  }

   testarBotoes(){
    if(this.produtos.length == 0){
      alert('Você precisa adicionar produtos!!');
      
      console.log(this.telaPequena);
    }else{
      console.log('tem produtos');
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
  }
}

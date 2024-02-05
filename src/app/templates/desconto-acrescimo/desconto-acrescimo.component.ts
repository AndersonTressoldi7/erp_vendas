import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PdvComponentComponent } from 'src/app/pages/pdv-component/pdv-component.component';

@Component({
  selector: 'app-desconto-acrescimo',
  templateUrl: './desconto-acrescimo.component.html',
  styleUrls: ['./desconto-acrescimo.component.scss']
})
export class DescontoAcrescimoComponent {
  desconto: number = 0;
  acrescimo: number = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { mensagem: string },
    private dialogRef: MatDialogRef<PdvComponentComponent>
  ) {}

  inserirValores(): void {
    const valores = { desconto: this.desconto, acrescimo: this.acrescimo };
    console.log('os valores no componente: ', valores);
    return this.dialogRef.close(valores);
  }
  

}

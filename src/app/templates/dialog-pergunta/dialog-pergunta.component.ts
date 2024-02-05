import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-pergunta',
  templateUrl: './dialog-pergunta.component.html',
  styleUrls: ['./dialog-pergunta.component.scss']
})
export class DialogPerguntaComponent {
  limparVenda: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { mensagem: string },
  private dialogRef: MatDialogRef<DialogPerguntaComponent>) {}

  fecharDialog(limparVenda: boolean){
    
   return this.dialogRef.close(limparVenda);
  }

  

  
}
import { MatDialog } from "@angular/material/dialog";
import { DialogAvisoComponent } from "./templates/dialog-aviso/dialog-aviso.component";
import { DialogPerguntaComponent } from "./templates/dialog-pergunta/dialog-pergunta.component";

export class utils{

    urlBase: string = 'http://localhost:8000';

    static exibirAviso(dialog: MatDialog, mensagem: string){
        dialog.open(DialogAvisoComponent,{
            data: {mensagem: mensagem },
            width: '500px',
            height: '200px'
        })
    }

    static exibirPergunta(dialog: MatDialog, mensagem: string): Promise<boolean>{
        const dialogRef = dialog.open(DialogPerguntaComponent,{
            data: {mensagem: mensagem },
            width: '500px',
            height: '150px'
        })

        return dialogRef.afterClosed().toPromise();

    }
}
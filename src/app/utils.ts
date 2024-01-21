import { MatDialog } from "@angular/material/dialog";
import { DialogAvisoComponent } from "./templates/dialog-aviso/dialog-aviso.component";

export class utils{
    static exibirAviso(dialog: MatDialog, mensagem: string){
        dialog.open(DialogAvisoComponent,{
            data: {mensagem: mensagem },
            width: '500px',
            height: '200px'
        })
    }
}
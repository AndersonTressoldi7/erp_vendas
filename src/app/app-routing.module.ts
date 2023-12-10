import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrosComponent } from './pages/cadastros/cadastros.component';
import { PdvComponentComponent } from './pages/pdv-component/pdv-component.component';

const routes: Routes = [
  { path: '', component: PdvComponentComponent},
  { path: 'CadastrosComponent', component: CadastrosComponent },
  { path: 'pdv', component: PdvComponentComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

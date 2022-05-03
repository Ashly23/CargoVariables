import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargosVariablesComponent } from './cargos-variables/cargos-variables.component';
import { ModalEditarComponent } from './vista/modal-editar/modal-editar.component';
import { ModalCargosComponent } from './vista/modal-cargos/modal-cargos.component';
import { VistaComponent } from './vista/vista.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/cargos-variables' },
  { path: 'cargos-variables', component: CargosVariablesComponent,
     children:[
       { path:'vista',component:VistaComponent,
       children:[
       { path:'modal-editar', component:ModalEditarComponent },
       { path: 'modal-cargos', component: ModalCargosComponent}
  ]}
 ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

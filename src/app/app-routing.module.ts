import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { MostrarClientesComponent } from './mostrar-clientes/mostrar-clientes.component';

const routes: Routes = [
  {
    path: '',
    component: MostrarClientesComponent
  },
  {
    path: 'create',
    component: CrearClienteComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

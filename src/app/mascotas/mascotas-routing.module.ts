import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  {
    path: '',
    component: ListaMascotasComponent,
  },
  {
    path: ':id',
    component: DetalleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MascotasRoutingModule { }

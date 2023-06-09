import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ListaMascotasResolver } from './lista-mascotas/lista-mascotas.resolver';
import { NuevaMascotaComponent } from './nueva-mascota/nueva-mascota.component';

const routes: Routes = [
  {
    path: '',
    component: ListaMascotasComponent,
    resolve: {
      mascotas: ListaMascotasResolver,
    },
  },
  {
    path: 'nuevo',
    component: NuevaMascotaComponent,
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MascotasRoutingModule } from './mascotas-routing.module';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { MascotaComponent } from './mascota/mascota.component';


@NgModule({
  declarations: [
    ListaMascotasComponent,
    MascotaComponent
  ],
  imports: [
    CommonModule,
    MascotasRoutingModule
  ]
})
export class MascotasModule { }

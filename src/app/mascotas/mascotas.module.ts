import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MascotasRoutingModule } from './mascotas-routing.module';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { MascotaComponent } from './mascota/mascota.component';
import { CardModule } from '../components/card/card.module';
import { GridMascotasComponent } from './grid-mascotas/grid-mascotas.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ComentariosComponent } from './detalle/comentarios/comentarios.component';
import { SharedModule } from '../shared/shared.module';
import { NuevaMascotaComponent } from './nueva-mascota/nueva-mascota.component';


@NgModule({
  declarations: [ListaMascotasComponent,MascotaComponent, GridMascotasComponent, DetalleComponent, ComentariosComponent, NuevaMascotaComponent],
  imports: [CommonModule,MascotasRoutingModule, CardModule, SharedModule],
})
export class MascotasModule { }

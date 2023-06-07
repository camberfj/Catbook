import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MascotasRoutingModule } from './mascotas-routing.module';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { MascotaComponent } from './mascota/mascota.component';
import { CardModule } from '../components/card/card.module';
import { GridMascotasComponent } from './grid-mascotas/grid-mascotas.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ComentariosComponent } from './detalle/comentarios/comentarios.component';


@NgModule({
  declarations: [ListaMascotasComponent,MascotaComponent, GridMascotasComponent, DetalleComponent, ComentariosComponent],
  imports: [CommonModule,MascotasRoutingModule, CardModule],
})
export class MascotasModule { }

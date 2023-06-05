import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MascotasRoutingModule } from './mascotas-routing.module';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { MascotaComponent } from './mascota/mascota.component';
import { CardModule } from '../components/card/card.module';
import { GridMascotasComponent } from './grid-mascotas/grid-mascotas.component';


@NgModule({
  declarations: [ListaMascotasComponent,MascotaComponent, GridMascotasComponent],
  imports: [CommonModule,MascotasRoutingModule, CardModule],
})
export class MascotasModule { }

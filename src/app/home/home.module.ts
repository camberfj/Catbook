import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from '../components/message/message.module';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HomeComponent, LoginComponent, NuevoUsuarioComponent],
  imports: [CommonModule,HomeRoutingModule, FormsModule, SharedModule],
  exports: [HomeComponent],
})
export class HomeModule { }

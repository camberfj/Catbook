import { NuevoUsuario } from './nuevo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NuevoUsuarioService {

  constructor(private httpclient: HttpClient) { }



  registrarUsuario(nuevoUsuario: NuevoUsuario){
    return this.httpclient.post('http://localhost:3000/user/signup', nuevoUsuario)
  }
}

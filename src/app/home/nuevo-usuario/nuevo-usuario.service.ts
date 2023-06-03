import { NuevoUsuario } from './nuevo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class NuevoUsuarioService {

  constructor(private httpClient: HttpClient) { }

  url = `${API}/user`;

  registrarUsuario(nuevoUsuario: NuevoUsuario) {
    return this.httpClient.post(`${this.url}/signup`, nuevoUsuario);
  }

  verificarUserName(userName: string): Observable<any> {
    return this.httpClient.get(`${this.url}/exists/${userName}`);
  }
}

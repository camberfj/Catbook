import { Mascotas } from './mascota';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '../auth/token.service';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  listaDeUsuario(usuario: string): Observable<Mascotas>{
    const token = this.tokenService.obtenerToken();
    const headers = new HttpHeaders().append("x-access-token", token)
    return this.http.get<Mascotas>(`${API}/${usuario}/photos`, { headers })
  }
}

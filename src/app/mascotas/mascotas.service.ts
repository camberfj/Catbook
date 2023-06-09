import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from '../auth/token.service';
import { catchError, mapTo, Observable, of, throwError } from 'rxjs';
import { Mascotas, Mascota } from './mascota';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;
const NOT_MODIFIED = 304;

@Injectable({
  providedIn: 'root',
})
export class MascotasService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  listaDeUsuario(usuario: string): Observable<Mascotas> {
    return this.http.get<Mascotas>(`${API}/${usuario}/photos`);
  }

  buscarPorId(id: number): Observable<Mascota> {
    return this.http.get<Mascota>(`${API}/photos/${id}`);
  }

  like(id: number): Observable<boolean> {
    return this.http
      .post(`${API}/photos/${id}/like`, {}, { observe: 'response' })
      .pipe(
        mapTo(true),
        catchError((error) => {
          return error.status === NOT_MODIFIED
            ? of(false)
            : throwError(() => new Error(error));
        })
      );
  }

  eliminar(id: number): Observable<Mascota> {
    return this.http.delete<Mascota>(`${API}/photos/${id}`);
  }

  upload(description: string, allowComments: boolean, file: File){
    const formData = new FormData();

    formData.append('description', description)
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', file);

    return this.http.post(`${API}/photos/upload`, formData, {
      observe: 'events',reportProgress: true,
    });
  }
}

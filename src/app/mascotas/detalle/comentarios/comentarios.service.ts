import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comentario, Comentarios } from './comentario';
import { HttpClient } from '@angular/common/http';


const API = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private http: HttpClient) { }

  buscarComentarios(id: number): Observable<Comentarios>{
    return this.http.get<Comentarios>(`${API}/photos/${id}/comments`);
  }

  crearComentario(id: number, commentText: string): Observable<Comentario>{
    return this.http.post<Comentario>(`${API}/photos/${id}/Comments`, {
      commentText
    })
  }
}

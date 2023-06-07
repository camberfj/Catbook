import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentarios } from './comentario';
import { ComentariosService } from './comentarios.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  @Input() id!: number;
  comentarios$ !: Observable<Comentarios>;
  constructor(private comentariosService: ComentariosService) {}

  ngOnInit(): void {
    this.comentarios$ = this.comentariosService.buscarComentarios(this.id);
  }

}

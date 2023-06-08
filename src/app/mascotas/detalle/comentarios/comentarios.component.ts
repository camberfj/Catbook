import { Component, Input, OnInit } from '@angular/core';
import { Observable, switchMap, tap } from 'rxjs';
import { Comentarios } from './comentario';
import { ComentariosService } from './comentarios.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DetalleComponent } from '../detalle.component';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  @Input() id!: number;
  comentarios$ !: Observable<Comentarios>;
  comentarioForm !: FormGroup
  constructor(private comentariosService: ComentariosService, private formBuilder: FormBuilder, private detalle: DetalleComponent) {}

  ngOnInit(): void {
    this.comentarios$ = this.comentariosService.buscarComentarios(this.id);
    this.comentarioForm = this.formBuilder.group({
      comentario: ['', Validators.maxLength(50)],
    });
  }

  crearComentario(): void{
    const comentario = this.comentarioForm.get('comentario')?.value ?? '';
    this.comentarios$ = this.comentariosService.crearComentario(this.id, comentario).pipe(
      switchMap( () => {
       return this.comentariosService.buscarComentarios(this.id);
      }),
      tap( () => {
        this.comentarioForm.reset();
        this.detalle.actualizarDatos();
      })
    );
  }

}

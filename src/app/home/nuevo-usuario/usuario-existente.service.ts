import { Injectable } from '@angular/core';
import { NuevoUsuarioService } from './nuevo-usuario.service';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExistenteService {

  constructor(private nuevoUsuarioService: NuevoUsuarioService) { }


  usuarioExistente() {
    return ( control: AbstractControl ) => {
      return control.valueChanges.pipe(
        switchMap((userName) =>
          this.nuevoUsuarioService.verificarUserName(userName)
        ),
        map((existe) => (existe ? { usuarioExistente: true } : null)),
        first( )
      );
    };
  }
}


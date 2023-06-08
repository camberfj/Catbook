import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of, switchMap, take } from 'rxjs';
import { UserService } from 'src/app/auth/user/user.service';
import { MascotasService } from '../mascotas.service';
import { Mascotas } from '../mascota';


@Injectable({
  providedIn: 'root'
})
export  class ListaMascotasResolver implements Resolve<Mascotas> {
  constructor( private userService: UserService, private mascotasService: MascotasService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Mascotas> {
    return this.userService.returnUsuario().pipe(
      switchMap( (usuario) => {
        const userName = usuario.name ?? '';
        return this.mascotasService.listaDeUsuario(userName);
      }),
      take(1)
    )
  }
}

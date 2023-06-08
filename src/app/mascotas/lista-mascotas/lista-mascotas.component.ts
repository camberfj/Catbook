import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/auth/user/user.service';
import { MascotasService } from '../mascotas.service';
import { Mascotas } from '../mascota';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-mascotas',
  templateUrl: './lista-mascotas.component.html',
  styleUrls: ['./lista-mascotas.component.css']
})
export class ListaMascotasComponent implements OnInit {
  mascotas !: Mascotas

  constructor(private userService: UserService, private mascotasService: MascotasService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    /*this.userService.returnUsuario().subscribe((usuario) => {
      const userName = usuario.name ?? '';
      this.mascotasService.listaDeUsuario(userName).subscribe((mascotas) => {
        console.log(mascotas);
        this.mascotas = mascotas;
      });
    });*/

    /*this.mascotas$ = this.userService.returnUsuario().pipe(
      switchMap( (usuario) => {
        const userName = usuario.name ?? '';
        return this.mascotasService.listaDeUsuario(userName);
      })
    );*/

    this.activatedRoute.params.subscribe( (params) => {
      this.mascotas = this.activatedRoute.snapshot.data['mascotas']
    })
  }

}

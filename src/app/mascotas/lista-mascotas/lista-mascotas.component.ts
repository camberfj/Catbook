import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/auth/user/user.service';
import { MascotasService } from '../mascotas.service';
import { Mascotas } from '../mascota';

@Component({
  selector: 'app-lista-mascotas',
  templateUrl: './lista-mascotas.component.html',
  styleUrls: ['./lista-mascotas.component.css']
})
export class ListaMascotasComponent implements OnInit {

  mascotas !: Mascotas;

  constructor(private userService: UserService, private mascotasService: MascotasService) {}

  ngOnInit(): void {
    this.userService.returnUsuario().subscribe((usuario) => {
      const userName = usuario.name ?? '';
      this.mascotasService.listaDeUsuario(userName).subscribe((mascotas) => {
        console.log(mascotas);
        this.mascotas = mascotas;
      });
    });
  }

}

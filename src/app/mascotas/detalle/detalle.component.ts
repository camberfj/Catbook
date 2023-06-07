import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MascotasService } from '../mascotas.service';
import { Mascota } from '../mascota';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent implements OnInit {
  mascotaId!: number;
  mascota$!: Observable<Mascota>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private mascotasService: MascotasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.mascotaId = this.activatedRoute.snapshot.params['id'];
    this.mascota$ = this.mascotasService.buscarPorId(this.mascotaId);
  }

  like() {
    console.log('me gusta');

    this.mascotasService.like(this.mascotaId).subscribe((like) => {
      if (like) {
        this.mascota$ = this.mascotasService.buscarPorId(this.mascotaId);
      }
    });
  }

  eliminar() {
    console.log('eliminar');
    this.mascotasService.eliminar(this.mascotaId).subscribe({
      complete: () => this.router.navigate(['/mascotas']),
      error: (error) => console.log(error),
    });
  }
}

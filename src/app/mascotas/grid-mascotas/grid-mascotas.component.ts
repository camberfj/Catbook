import { Component, Input, OnInit } from '@angular/core';
import { Mascotas } from '../mascota';

@Component({
  selector: 'app-grid-mascotas',
  templateUrl: './grid-mascotas.component.html',
  styleUrls: ['./grid-mascotas.component.css']
})
export class GridMascotasComponent implements OnInit {
  @Input() mascotas !: Mascotas;

  constructor() { }

  ngOnInit(): void {

  }

}

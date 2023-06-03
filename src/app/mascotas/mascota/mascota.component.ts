import { Component, Input, OnInit } from '@angular/core';

const apiUrl = "http://localhost:3000"

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styleUrls: ['./mascota.component.css']
})
export class MascotaComponent implements OnInit {

  private baseUrl = ""

  @Input() description = ''

  @Input() set url(url: string){
    if( url.startsWith('data') ) {
      this.baseUrl = url
    }else{
      this.baseUrl = `${apiUrl}/ims/${url}`;
    }
  }

  get url(): string {
    return this.baseUrl;
  }

  constructor() { }

  ngOnInit(): void { }

}

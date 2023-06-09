import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MascotasService } from '../mascotas.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-nueva-mascota',
  templateUrl: './nueva-mascota.component.html',
  styleUrls: ['./nueva-mascota.component.css']
})
export class NuevaMascotaComponent implements OnInit {
  formNuevaMascota !: FormGroup
  file!: File
  preview!: string
  percentage = 0

  constructor(private mascotasService: MascotasService, private formBuilder: FormBuilder, private router: Router) {}


  ngOnInit(): void {
    this.formNuevaMascota = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(50)],
      allowComments: [true]
    });
  }

  upload() {
    console.log('Guardar formulario');
    const allowComments = this.formNuevaMascota.get('allowComments')?.value ?? false
    const description = this.formNuevaMascota.get('description')?.value ?? '';
    const file = this.file

    console.log(description, allowComments, file);

    this.mascotasService
      .upload(description, allowComments, file)
      .pipe(finalize( () => this.router.navigate(['mascotas']))).subscribe((event: HttpEvent<any>) => {
        if(event.type === HttpEventType.UploadProgress){
          const total = event.total ?? 1
          this.percentage = Math.round( 100 * (event.loaded / total));
          console.log(this.percentage);
        }
      });
  }

  saveFile(fileSelected: any): void {
    console.log("FS", fileSelected?.files);
    const [file] = fileSelected?.files
    this.file = file
    const reader = new FileReader()

    reader.onload = (event: any) => {
      this.preview = event.target.result;
    };

    reader.readAsDataURL(file);
  }

}

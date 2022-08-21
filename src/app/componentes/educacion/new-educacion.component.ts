import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {

  instituto: string = '';
  fechaIni : string = '';
  fechaFin : string = '';
  carrera : string = '';

  constructor(private educacionService:EducacionService,  private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const edu = new educacion( this.instituto, this.fechaIni, this.fechaFin, this.carrera);
    this.educacionService.saveEducacion(edu).subscribe(data =>{
      alert("Educacion añadida");
      this.router.navigate(['']);
    },err => {
      alert("Fallo la carga de experiencia");
      this.router.navigate([''])
    })
  }
}

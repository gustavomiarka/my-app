import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaLab } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  nombreEmpresa: string = '';
  fechaIni : string = '';
  fechaFin : string = '';
  descripcion : string = '';
  titulo : string = '';

  constructor(private experienciaService: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    let expe = new ExperienciaLab(this.nombreEmpresa, this.fechaIni, this.fechaFin, this.descripcion, this.titulo);
    this.experienciaService.saveExperiencia(expe).subscribe(data => {
      alert("Experiencia añadida");
      this.router.navigate(['']);
    },err => {
      alert("Fallo la carga de experiencia");
      this.router.navigate([''])
    })
  }


}

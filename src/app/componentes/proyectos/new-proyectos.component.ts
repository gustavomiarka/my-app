import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {

    titulo : string = '';
    fechaIni: string= '';
    fechaFin: string= '';
    descripcion: string= '';
    link: string= '';

  constructor(private proyectosService: ProyectosService,  private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyec = new proyectos( this.titulo, this.fechaIni, this.fechaFin, this.descripcion, this.link );
    this.proyectosService.saveProyectos(proyec).subscribe(data =>{
      alert("Proyecto añadido");
      this.router.navigate(['']);
    },err => {
      alert("Fallo la carga");
      this.router.navigate([''])
    })
  }
}

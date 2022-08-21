import { Component, OnInit } from '@angular/core';
import { proyectos } from 'src/app/model/proyectos.model';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
 
  proyec: proyectos[]=[];

  constructor(private proyectosService: ProyectosService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyectos();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarProyectos(): void {
    this.proyectosService.getProyectos().subscribe(data =>{
      this.proyec= data;
    })
  }

  deleteProyectos(id?:number ): void {
    this.proyectosService.deleteProyectos(id).subscribe(data => {
      this.cargarProyectos();
    })
  }
}

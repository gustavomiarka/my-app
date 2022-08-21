import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';
import { ExperienciaLab} from 'src/app/model/experiencia.model';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  expe: ExperienciaLab[] = [];

  constructor(private experienciaService: ExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia()
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.experienciaService.getExperiencia().subscribe(data =>{
      this.expe = data;
  })
  }

  deleteExperiencia(id?:number ): void {
    this.experienciaService.deleteExperiencia(id).subscribe(data => {
      this.cargarExperiencia();
    })
  }

}

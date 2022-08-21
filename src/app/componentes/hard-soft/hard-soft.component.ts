import { Component, OnInit } from '@angular/core';
import { habilidadesHard } from 'src/app/model/habilidadesHard.model';
import { habilidadesSoft } from 'src/app/model/habilidadesSoft.model';
import { HabilidadesHardService } from 'src/app/servicios/habilidades-hard.service';
import { HabilidadesSoftService } from 'src/app/servicios/habilidades-soft.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-hard-soft',
  templateUrl: './hard-soft.component.html',
  styleUrls: ['./hard-soft.component.css']
})
export class HardSoftComponent implements OnInit {
 
  hard: habilidadesHard[]=[];
  soft: habilidadesSoft[]=[];
  


  constructor(private habilidadesHardService:HabilidadesHardService, private habilidadesSoftService:HabilidadesSoftService ,private tokenService: TokenService) { }

  isLogged = false;
  ngOnInit(): void {
    this.cargarHard();
    this.cargarSoft();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarHard(): void {
    this.habilidadesHardService.getHabilidadesHard().subscribe(data =>{
      this.hard = data;
    });
  }
  cargarSoft(): void {
    this.habilidadesSoftService.getHabilidadesSoft().subscribe(data => {
      this.soft = data;
    })
  }
}
